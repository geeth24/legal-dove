import { ObjectId, Double } from "mongodb"

export default class Data {
    constructor(
        public _id: ObjectId,
        public name: string,
        public description: string,
        public address: string,
        public latitude: Double,
        public longitude: Double,
        public phoneNumber: string,
        public website: string,
        public inclusions: Array<string>,
        public exclusions: Array<string>,
        public schedule: Array<number>
    ) {}
}
