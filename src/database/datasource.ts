import { config } from "src/shared/config/config.service";
import {DataSource, DataSourceOptions} from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    url: config().database.url,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    //logging: true,
    ssl: true

}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource