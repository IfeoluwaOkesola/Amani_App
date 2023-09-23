import * as dotenv from 'dotenv'
dotenv.config();

export const config =()=>({
    PORT: {
        APP_PORT: process.env.PORT
    },

    database:{
        type: 'postgres',
        url: process.env.DB_URL

    }
})

