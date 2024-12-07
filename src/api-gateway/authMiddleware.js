const axios = require('axios');

const validateToken = async (token) => {
    try {
        const response = await axios.post('http://localhost:3001/api/users/validate-token', { token });
        return response.data.isValid;
    } catch (error) {
        console.error('Token validation error:', error.message);
        return false;
    }
};

const authMiddleware = (service) => async (req, res, next) => {
    if (!service.authRequired) {
        return next();
    }
    if (service.specificRules && service.specificRules[req.method] === false) {
        return next();
    }

    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const isValid = await validateToken(token);
    if (isValid) {
        next();
    } else {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;
