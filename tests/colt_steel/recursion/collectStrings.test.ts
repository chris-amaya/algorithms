import { collectStrings } from "@/colt_steel/recursion/collectStrings"

describe('collectStrings', () => { 
    const obj = {
    // stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
    test('should collect correctly', () => {
        expect(collectStrings(obj)).toStrictEqual(["bar", "baz"])
    })
 })