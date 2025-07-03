import { stringifyNumbers } from "@/colt_steel/recursion/stringifyNumbers"

describe('stringifyNumbers', () => { 
    test('should return correct stringify obj', () => {
        let obj = {
            num: 1,
            test: [],
            data: {
                val: 4,
                info: {
                    isRight: true,
                    random: 66
                }
            }
        }

        const ojb2 = {
            num: "1",
            test: [],
            data: {
                val: "4",
                info: {
                    isRight: true,
                    random: "66"
                }
            }
        }

        expect(stringifyNumbers(obj)).toMatchObject(ojb2)
    })
 })