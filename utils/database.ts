import { MongoClient, type MongoClientOptions } from "mongodb";

const url = process.env.NEXT_PUBLIC_DB_CONN_STRING;
const options: MongoClientOptions = {};

let client: MongoClient;
let connectDB: Promise<MongoClient>;

if (!url) throw new Error(".env 파일에 MongoDB URL을 추가해 주세요.");

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서는 MongoClient를 전역에 저장
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(url, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  connectDB = (global as any)._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 새로운 클라이언트를 생성
  client = new MongoClient(url, options);
  connectDB = client.connect();
}

export default connectDB;
