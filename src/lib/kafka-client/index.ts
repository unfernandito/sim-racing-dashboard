import { Kafka, logLevel } from 'kafkajs'; 

//const { KAFKA_USERNAME: kafkaUsername, KAFKA_PASSWORD: kafkaPassword, KAFKA_SSL: ssl } = process.env

//const username = kafkaUsername ?? "default";
//const password = kafkaPassword ?? "";

const brokers = process.env.KAFKA_BOOTSTRAP_SERVER ? [process.env.KAFKA_BOOTSTRAP_SERVER] : ["localhost:9092"]

console.log(brokers)
export const kafka = new Kafka({
	logLevel: logLevel.ERROR,
	clientId: 'sim-data-producer',
	brokers,
	//ssl: !!ssl,
	//sasl: { username, password, mechanism: 'plain' }
});

export const producer = kafka.producer();