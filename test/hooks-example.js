describe('hooks', function () {
    before(function () {
        console.log('HERE IS LOG BEFORE TESTS')
    });
    after(function () {
        console.log('HERE IS LOG AFTER TESTS')
    });
    beforeEach('some description', function () {
        console.log('HERE IS LOG BEFORE EACH TEST')
    });
    afterEach(function () {
        console.log('HERE IS LOG AFTER EACH TEST')
    });

    it('example test', function () {
        console.log('HERE IS LOG FROM TEST')
    })

    it('second test', function () {
        console.log('HERE IS LOG FROM SECOND TEST')
    })
});