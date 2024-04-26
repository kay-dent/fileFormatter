import format from "./format";

const data = "Publication Date,Title,Authors \n29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien \n01/08/1996,A Game of Thrones,George Raymond Martin \n05/07/2022,Tomorrow and Tomorrow and Tomorrow,Gabrielle Zevin";

test('correctly formats data', () => {
    expect(format(data).toBe([
        "| Pub Date    |                         Title | Authors               |", 
        "|=====================================================================|", 
        "| 29 Jul 1954 |             Lord of the Rings | John Ronald Reuel ... |",
        "| 01 Aug 1996 |             A Game of Thrones | George Raymond Martin |",
        "| 05 Jul 2022 | Tomorrow and Tomorrow and ... |       Gabrielle Zevin |)"
    ]))
})