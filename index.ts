import { ExasolDriver,ExaWebsocket } from '@exasol/exasol-driver-ts';
import { WebSocket } from 'ws';

const driver = new ExasolDriver((url) => {
      return new WebSocket(url) as ExaWebsocket;
    }, {
        host: "localhost",
        port: 8563,
        user: 'sys',
        password: 'exasol',
        encryption: false,
    });

//connect
const connection_test = await driver.connect();
console.log(connection_test);
//execute query
// await driver.query("SELECT * FROM EXA_ALL_SCHEMAS");
// //close the connection
// await driver.close();