describe('grade', function () {
    var expectText;
    var input;

    it('should print A with 90', function () {
        expectText = 'A';
        input = 90;
          expect( printInventory(input)).toBe(expectText);
    });
        it('should print B with 85', function () {
            expectText = 'B';
            input = 85;
            expect( printInventory(input)).toBe(expectText);
        });

        it('should print C with 74', function () {
                    expectText = 'C';
                    input = 74;
                    expect( printInventory(input)).toBe(expectText);
                });
        it('should print C with 60', function () {
                    expectText = 'C';
                    input = 60;
                    expect( printInventory(input)).toBe(expectText);
                });
        it('should print D with 55', function () {
                    expectText = 'D';
                    input = 55;
                    expect( printInventory(input)).toBe(expectText);
                });
});
