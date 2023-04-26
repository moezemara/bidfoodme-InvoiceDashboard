import crypto from 'crypto';
import oauth1a from 'oauth-1.0a';
import config from '../../../config/Config.js'

const CONSUMERKEY = config.caf.oauth.consumer_key
const CONSUMERSECRET = config.caf.oauth.consumer_secret
const TOKENKEY = config.caf.oauth.token_key
const TOKENSECRET = config.caf.oauth.token_secret

class Oauth1Helper {
    static getAuthHeaderForRequest(request) {
        const oauth = oauth1a({
            consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
            signature_method: 'HMAC-SHA256',
            realm: '4848148_SB2',
            hash_function(base_string, key) {
                return crypto
                    .createHmac('SHA256', key)
                    .update(base_string)
                    .digest('base64')
            },
        })

        const authorization = oauth.authorize(request, {
            key: TOKENKEY,
            secret: TOKENSECRET,
        });

        return oauth.toHeader(authorization)
    }
}

export default Oauth1Helper