// const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';

export class ConsentSDK {
    constructor(apiUrl) {
        if (!apiUrl) throw new Error('API URL is required');
        this.apiUrl = apiUrl;
    }

    async #post(endpoint, data) {
        const res = await fetch(`${this.apiUrl}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error((await res.json()).message);
        return res.json();
    }

    requestConsent(customerId, transactionId, redirectUri, policyVersion, refUri, text, code, scope) {
        if (!customerId || !redirectUri || !policyVersion || !scope) throw new Error('All parameters are required');
        return this.#post('/request_consent', {
            userId: customerId,
            redirectUri,
            transactionId: transactionId ?? uuidv4(),
            purpose: { code, refUri, text, policyVersion },
            scope,
        });
    }

    validateToken(token) {
        if (!token) throw new Error('Token is required');
        return this.#post('/validate_token', { token });
    }

    fetchConsent(userId) {
        if (!userId) throw new Error('UserId is required');
        return this.#post('/read_consent', { userId });
    }

    revokeConsent(transactionId, userId) {
        if (!userId || !transactionId) throw new Error('UserId and TransactionId are required');
        return this.#post('/revoke_sonsent', { userId, transactionId });
    }
}

// module.exports = { ConsentSDK };

// export default ConsentSDK
