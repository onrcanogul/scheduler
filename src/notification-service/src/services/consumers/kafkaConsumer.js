const { Kafka } = require('kafkajs');
const { sendMail } = require("../notification-service");

const kafka = new Kafka({
    clientId: 'notification-service',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'notification-group' });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'appointments', fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const event = JSON.parse(message.value.toString());
            console.log(`Received event: ${event.action}`);

            if (event.action === 'CREATE') {
                sendMail("scheduler@test.com", "willcome@test.com", "Appointment was created.",
                    `Target Date: ${event.data.target_date}, Status: ${event.data.status}`)
            }
            if (event.action === 'DELETE') {
                sendMail("scheduler@test.com", "willcome@test.com", "Appointment was deleted.",
                    `Target Date: ${event.data.target_date}, Status: ${event.data.status}`)
            }
            if (event.action === 'UPDATE') {
                sendMail("scheduler@test.com", "willcome@test.com", "Appointment was updated.",
                    `Target Date: ${event.data.target_date}, Status: ${event.data.status}`)
            }
        },
    });
};

runConsumer().catch(console.error);