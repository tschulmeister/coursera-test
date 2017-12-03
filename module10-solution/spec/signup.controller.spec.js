describe("SignupController test", function () {

    var signupController;
    var MenuService;
    var UserService;
    var $httpBackend;
    var ApiPath;
    var $rootScope;

    beforeEach(function () {
        console.log("foo");
        // Load module
        module('public');

        // Load any dependencies
        inject(function ($injector) {
            console.log("baz");
            var $controller = $injector.get('$controller');
            $httpBackend = $injector.get('$httpBackend');
            MenuService = $injector.get('MenuService');
            UserService = $injector.get('UserService');
            ApiPath = $injector.get('ApiPath');
            $rootScope = $injector.get('$rootScope');

            signupController = $controller('SignupController', {
                UserService: UserService,
                MenuService: MenuService
            });
        });
    });

    it("should set a variable indicating that the item doesn't exist", function () {
        expect(signupController.noSuchDishError).toBe(false);

        $httpBackend.whenGET(ApiPath + '/menu_items/foo.json').respond(400, null);
        signupController.checkItem("foo");
        $httpBackend.flush();
        expect(signupController.noSuchDishError).toBe(true);
    });

    it("should set a variable indicating that the item exists", function () {
        expect(signupController.noSuchDishError).toBe(false);

        $httpBackend.whenGET(ApiPath + '/menu_items/foo.json').respond(200, '');
        signupController.checkItem("foo");
        $httpBackend.flush();
        expect(signupController.noSuchDishError).toBe(false);
    });

});
