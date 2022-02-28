import { Module } from '@nestjs/common'

@Module({})
export class ConfigModule {
    static MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/crud_operation'
    static SERVER_PORT = process.env.PORT || 3000
    static HOST = process.env.HOST || '127.0.0.1'
}
