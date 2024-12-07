const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "appointment-service",
  brokers: ["localhost:9092"],
});

const producer = Kafka.producer();

const connectKafka = async () => {
  try {
    await producer.connect();
  } catch (err) {
    console.error(err);
  }
};

const publishEvent = async (topic, message) => {
  try {
    await producer.send({
      topic,
      message: [{ value: JSON.stringify(message) }],
    });
    console.log("event published");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectKafka, publishEvent };
