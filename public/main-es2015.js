(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-navbar></app-navbar>\n  <div class=\"page\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/add-modal/add-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/add-modal/add-modal.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New Product</h2>\n<form [formGroup]=\"addProductForm\" (ngSubmit)=\"save()\">\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"form-body\">\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Name</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"Name\"\n               formControlName=\"name\">\n        <mat-error *ngIf=\"addProductForm.controls['name'].errors?.required\">Product name is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Category</mat-label>\n        <mat-select placeholder=\"Category\"\n                    formControlName=\"categoryId\">\n          <mat-option *ngFor=\"let item of data.categories | keyvalue\" [value]=\"data.categories[item.key]._id\">\n            {{ data.categories[item.key].name }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"addProductForm.controls['categoryId'].errors?.required\">Category is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Price</mat-label>\n        <input class=\"form-input\" matInput\n               type=\"number\"\n               [min]=\"0\"\n               placeholder=\"Price\"\n               formControlName=\"price\"\n        >\n        <mat-error *ngIf=\"addProductForm.controls['price'].errors?.required\">Price is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Image URL</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"Image URL\"\n               formControlName=\"imageURL\">\n        <mat-error *ngIf=\"addProductForm.controls['imageURL'].errors?.required\">Image URL is required.</mat-error>\n      </mat-form-field>\n\n    </div>\n  </mat-dialog-content>\n  <div class=\"form-footer\">\n    <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-button type=\"submit\" [disabled]=\"!addProductForm.valid\">Save Product</button>\n    </mat-dialog-actions>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/admin-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/admin-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n<div *ngIf=\"!isLoading\" class=\"container add-header\">\n  <button class=\"add-button\" mdbBtn type=\"button\" color=\"indigo\" mdbWavesEffect (click)=\"openAddDialog(categories)\">Add\n    New Product\n  </button>\n</div>\n<div class=\"form-wraper\">\n  <div class=\"container card\">\n    <div *ngIf=\"!isLoading\" class=\"table-responsive\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Category</th>\n          <th scope=\"col\">Actions</th>\n          <th scope=\"col\">Photo</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let product of products\">\n          <th scope=\"row\">{{ product._id }}</th>\n          <td>{{ capFirstLetter(product.name) }}</td>\n          <td>{{ product.price | currency:'USD' }}</td>\n          <td>{{ categories[product.categoryId].name }}</td>\n          <td>\n            <button class=\"edit-btn\" (click)=\"openEditDialog(product, categories)\"></button>\n          </td>\n          <td><img class=\"image\" src=\"{{ product.imageURL }}\" alt=\"..\"></td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/edit-modal/edit-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/edit-modal/edit-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Product</h2>\n<form [formGroup]=\"editProductForm\" (ngSubmit)=\"save(data.preEditFields._id)\">\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"form-body\">\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Name</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"{{ capFirstLetter(data.preEditFields.name) }}\"\n               formControlName=\"name\"\n               [value]=\"data.preEditFields.name\">\n        <mat-error *ngIf=\"editProductForm.controls['name'].errors?.required\">Product name is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Category</mat-label>\n        <mat-select placeholder=\"{{ data.categories[data.preEditFields.categoryId].name }}\"\n                    formControlName=\"categoryId\">\n          <mat-option *ngFor=\"let item of data.categories | keyvalue\" [value]=\"data.categories[item.key]._id\">\n            {{ data.categories[item.key].name }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"editProductForm.controls['categoryId'].errors?.required\">Category is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Price</mat-label>\n        <input class=\"form-input\" matInput\n               type=\"number\"\n               [min]=\"0\"\n               placeholder=\"{{ data.preEditFields.price | currency: 'USD'}}\"\n               formControlName=\"price\"\n               [value]=\"data.preEditFields.price\"\n        >\n        <mat-error *ngIf=\"editProductForm.controls['price'].errors?.required\">Price is required.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Image URL</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"{{ data.preEditFields.imageURL }}\"\n               formControlName=\"imageURL\"\n               [value]=\"data.preEditFields.imageURL\"\n        >\n        <mat-error *ngIf=\"editProductForm.controls['imageURL'].errors?.required\">Image URL is required.</mat-error>\n      </mat-form-field>\n\n    </div>\n  </mat-dialog-content>\n  <div class=\"form-footer\">\n    <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-button type=\"submit\" [disabled]=\"!editProductForm.valid\">Save Changes</button>\n    </mat-dialog-actions>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper\">\n  <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n  <div *ngIf=\"!isLoading\">\n\n    <div class=\"dashboard-container\">\n      <div class=\"welcome-section\">\n        <div class=\"welcome-box\">\n          <div class=\"welcome-text\">\n            <div>\n              <h1> Hi, {{capFirstLetter(user.firstName)}}</h1>\n              <div *ngIf=\"messageStatus === 0\">\n                <h6>Welcome To FOODJAM.</h6>\n                <h6>We Deliver Fresh Organic Food From Our Fields To Your Door.</h6>\n              </div>\n              <h6 *ngIf=\"messageStatus === 1\">Welcome Back</h6>\n              <div *ngIf=\"messageStatus === 2\">\n                <h6>New Fresh Products Are Waiting For You.</h6>\n              </div>\n              <div> {{dashboardMessage}} </div>\n            </div>\n          </div>\n          <div>\n            <button class=\"shop-btns\" *ngIf=\"continueShopButton\"\n                    mdbBtn type=\"button\" gradient=\"peach\" rounded=\"true\" size=\"lg\" mdbWavesEffect\n                    routerLink=\"/shop\">\n              Continue Shopping\n            </button>\n            <button class=\"shop-btns custom-blue\" *ngIf=\"!continueShopButton\"\n                    mdbBtn type=\"button\" gradient=\"blue\" rounded=\"true\" size=\"lg\" mdbWavesEffect routerLink=\"/shop\">\n              Enter The\n              Shop\n            </button>\n          </div>\n        </div>\n\n        <div class=\"welcome-image-container\">\n          <img *ngIf=\"messageStatus === 0\" class=\"welcome-image\" src=\"../../../assets/ecommerce.png\" alt=\"..\">\n          <img *ngIf=\"messageStatus === 1\" class=\"welcome-image\" src=\"../../../assets/dashboard-open-cart.png\"\n               alt=\"..\">\n          <img *ngIf=\"messageStatus === 2\" class=\"welcome-image\" src=\"../../../assets/dashboard-order.png\"\n               alt=\"..\">\n        </div>\n      </div>\n\n      <div class=\"counters-section\">\n        <div>\n          <h4>Groceries In Our Shop</h4>\n          <div class=\"to-center counter\">\n            <img *ngIf=\"messageStatus !== 1\" class=\"productBag\" src=\"../../../assets/gro.png\" alt=\"pb\">\n            <img *ngIf=\"messageStatus === 1\" class=\"productBag\" src=\"../../../assets/gro2.png\" alt=\"pb\">\n            <button *ngIf=\"messageStatus !== 1\" mat-fab color=\"primary\" class=\"counter-blue\" [countUp]=numOfProducts>\n              0\n            </button>\n            <button *ngIf=\"messageStatus === 1\" mat-fab color=\"warn\" [countUp]=numOfProducts>0</button>\n          </div>\n        </div>\n\n        <div>\n          <h4 class=\"counter-title\">Customer Orders</h4>\n          <div class=\"to-center counter\">\n            <img *ngIf=\"messageStatus !== 1\" class=\"orderBag\" src=\"../../../assets/order.png\" alt=\"order\">\n            <img *ngIf=\"messageStatus === 1\" class=\"orderBag\" src=\"../../../assets/order2.png\" alt=\"order\">\n            <button *ngIf=\"messageStatus !== 1\" mat-fab color=\"primary\" class=\"counter-blue\" [countUp]=numOfOrders>0\n            </button>\n            <button *ngIf=\"messageStatus === 1\" mat-fab color=\"warn\" [countUp]=numOfOrders>0</button>\n          </div>\n        </div>\n\n        <div>\n          <h4>Groceries Under 5$</h4>\n          <div class=\"to-center counter\">\n            <img *ngIf=\"messageStatus !== 1\" class=\"orderBag\" src=\"../../../assets/coin.png\" alt=\"coin\">\n            <img *ngIf=\"messageStatus === 1\" class=\"orderBag\" src=\"../../../assets/coin2.png\" alt=\"coin\">\n            <button *ngIf=\"messageStatus !== 1\" mat-fab color=\"primary\" class=\"counter-blue\"\n                    [countUp]=numOfCheapProducts>0\n            </button>\n            <button *ngIf=\"messageStatus === 1\" mat-fab color=\"warn\" [countUp]=numOfCheapProducts>0</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n\n  <!--HEADER SECTION-->\n  <header class=\"bg-primary py-5 mb-5\">\n    <div class=\"container h-100\">\n      <div class=\"row h-100 align-items-center\">\n        <div class=\"col-lg-8\">\n          <h1 class=\"display-4 text-white mt-5 mb-2\">JAM-PACKED With Fresh Groceries</h1>\n          <p class=\"lead mb-5 text-white-50\">We at foodjame offer the experience of an online supermarket at the comfort\n            of your home.\n            With our trusted partner network of over 100 family farms we are able to offer you the best and freshest\n            products in the market.\n          </p>\n        </div>\n        <div class=\"col-lg-4\">\n          <img class=\"header-img\" src=\"../../../assets/884.png\" alt=\"...\">\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <!--INFO SECTION-->\n  <div class=\"info-secondary\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mb-5\">\n          <h2>What We Do</h2>\n          <hr>\n          <p class=\"info-p\">FOODJAM was set up by farmers and friends from all over the country,\n            with the aim of reaching families directly in their home - without any middle-man.\n          </p>\n          <p class=\"info-p\">From the moment you place your order, our products are packed and handled with care and\n            shipped directly to your door\n            with no commercial factor.\n          </p>\n          <button class=\"btn btn-primary btn-lg\" routerLink=\"/shop\" *ngIf=\"this.authService.isUserLoggedIn()\">Continue\n            Shopping\n          </button>\n          <button class=\"btn btn-primary btn-lg\" routerLink=\"/signup\" *ngIf=\"!this.authService.isUserLoggedIn()\">Sign Up\n            Here\n          </button>\n        </div>\n        <div class=\"col-md-4 mb-5\">\n          <img class=\"card-img-top\" src=\"../../../assets/bag-home.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!--PRODUCT CAROUSEL-->\n  <footer class=\"product-cards\">\n    <h2 class=\"catalog-header\">Our Catalog</h2>\n    <hr>\n    <div class=\"container\">\n      <mdb-carousel [isControls]=\"true\" class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\"\n                    [animation]=\"'slide'\">\n        <mdb-carousel-item *ngFor=\"let item of slides; let i = index\">\n          <div class=\"col-md-4\" [ngClass]=\"{'d-none d-md-block': cardIndex !== 0}\"\n               *ngFor=\"let card of item; let cardIndex = index\">\n            <mdb-card class=\"my-1\" style=\"background-color: #121348; color: white\">\n              <div class=\"to-center\">\n                <mdb-card-img [src]=\"card.imageURL\" class=\"img-card\" alt=\"Card image cap\"></mdb-card-img>\n              </div>\n              <mdb-card-body>\n                <mdb-card-title>\n                  <h4>{{capFirstLetter(card.name)}}</h4>\n                </mdb-card-title>\n                <p>{{card.price | currency: 'USD'}}</p>\n              </mdb-card-body>\n            </mdb-card>\n          </div>\n        </mdb-carousel-item>\n      </mdb-carousel>\n    </div>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/invoice/invoice.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/invoice/invoice.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n<div *ngIf=\"!isLoading && totalCartProductsQuantity > 0\">\n  <button mat-button (click)=\"captureScreen()\">Download Receipt</button>\n  <button mat-button (click)=\"backToDashBoard()\">Back To Dashboard</button>\n  <div class=\"container\" id=\"contentToConvert\">\n    <div class=\"row\">\n\n      <div class=\"receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3\">\n        <div class=\"row\">\n          <div class=\"receipt-header\">\n            <div class=\"col-xs-6 col-sm-6 col-md-6\">\n              <div class=\"receipt-left\">\n              </div>\n            </div>\n            <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n              <div class=\"receipt-right\">\n                <h5>Shopping Experience</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n        </div>\n\n        <div *ngIf=\"!isLoading\">\n          <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n              <th>Description</th>\n              <th>Quantity</th>\n              <th>Unit</th>\n              <th>Price</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let invoiceProduct of currentCartProducts\">\n              <td class=\"col-md-9\">{{capFirstLetter(productsForCart[invoiceProduct._id].name)}}</td>\n              <td class=\"col-md-3\"><i class=\"fa fa-inr\"></i>{{ invoiceProduct.quantity }}</td>\n              <td class=\"col-md-3\"><i\n                class=\"fa fa-inr\"></i>{{ productsForCart[invoiceProduct._id].price | currency: 'USD'}}</td>\n              <td class=\"col-md-3\"><i\n                class=\"fa fa-inr\"></i> {{ productsForCart[invoiceProduct._id].price * invoiceProduct.quantity | currency: 'USD'}}\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\n                  <strong>Sum of quantity: </strong>\n                </p>\n              </td>\n              <td class=\"align-right\" colspan=\"3\">\n                <p>\n                  <strong><i class=\"fa fa-inr\"></i> {{totalCartProductsQuantity}}</strong>\n                </p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\n                  <strong>TAX percent: </strong>\n                </p>\n                <p>\n                  <strong>Before TAX: </strong>\n                </p>\n                <p>\n                  <strong>Tax Balance: </strong>\n                </p>\n              </td>\n              <td class=\"align-right\" colspan=\"3\">\n                <p>\n                  <strong><i class=\"fa fa-inr\"></i> 17%</strong>\n                </p>\n                <p>\n                  <strong><i class=\"fa fa-inr\"></i> {{ totalPrice * 0.83 | currency: 'USD'}}</strong>\n                </p>\n                <p>\n                  <strong><i class=\"fa fa-inr\"></i> {{ totalPrice - totalPrice * 0.83 | currency: 'USD'}}</strong>\n                </p>\n              </td>\n            </tr>\n            <tr>\n\n              <td><h2><strong>Total: </strong></h2></td>\n              <td class=\"text-left text-danger\" colspan=\"3\"><h2><strong><i\n                class=\"fa fa-inr\"></i>{{ totalPrice | currency: 'USD'}}</strong></h2></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"receipt-header receipt-header-mid receipt-footer\">\n            <div class=\"col-xs-8 col-sm-8 col-md-8 text-left\">\n              <div class=\"receipt-right\">\n                <p><b>Order date :</b> {{dates.orderDate}}</p>\n                <p><b>Delivery :</b> {{dates.deliveryDate}}</p>\n                <h5 style=\"color: rgb(140, 140, 140);\">Thank you for choosing our shop!</h5>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER START -->\n<div class=\"footer\">\n  <div class=\"contain\">\n    <div class=\"col to-center\">\n      <h1>FOODJAM 2019</h1>\n\n<!--        <li>About</li>-->\n<!--        <li>Mission</li>-->\n<!--        <li>Services</li>-->\n<!--        <li>Social</li>-->\n<!--        <li>Get in touch</li>-->\n\n    </div>\n<!--    <div class=\"col\">-->\n<!--      <h1>Products</h1>-->\n<!--      <ul>-->\n<!--        <li>About</li>-->\n<!--        <li>Mission</li>-->\n<!--        <li>Services</li>-->\n<!--        <li>Social</li>-->\n<!--        <li>Get in touch</li>-->\n<!--      </ul>-->\n<!--    </div>-->\n<!--    <div class=\"col\">-->\n<!--      <h1>Accounts</h1>-->\n<!--      <ul>-->\n<!--        <li>About</li>-->\n<!--        <li>Mission</li>-->\n<!--        <li>Services</li>-->\n<!--        <li>Social</li>-->\n<!--        <li>Get in touch</li>-->\n<!--      </ul>-->\n<!--    </div>-->\n<!--    <div class=\"col\">-->\n<!--      <h1>Resources</h1>-->\n<!--      <ul>-->\n<!--        <li>Webmail</li>-->\n<!--        <li>Redeem code</li>-->\n<!--        <li>WHOIS lookup</li>-->\n<!--        <li>Site map</li>-->\n<!--        <li>Web templates</li>-->\n<!--        <li>Email templates</li>-->\n<!--      </ul>-->\n<!--    </div>-->\n<!--    <div class=\"col\">-->\n<!--      <h1>Support</h1>-->\n<!--      <ul>-->\n<!--        <li>Contact us</li>-->\n<!--        <li>Web chat</li>-->\n<!--        <li>Open ticket</li>-->\n<!--      </ul>-->\n<!--    </div>-->\n<!--    <div class=\"col social\">-->\n<!--      <h1>Social</h1>-->\n<!--      <ul>-->\n<!--        <li><img src=\"https://svgshare.com/i/5fq.svg\" width=\"32\" style=\"width: 32px;\"></li>-->\n<!--        <li><img src=\"https://svgshare.com/i/5eA.svg\" width=\"32\" style=\"width: 32px;\"></li>-->\n<!--        <li><img src=\"https://svgshare.com/i/5f_.svg\" width=\"32\" style=\"width: 32px;\"></li>-->\n<!--      </ul>-->\n<!--    </div>-->\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\n  <mat-toolbar-row>\n    <button routerLink=\"\" mat-button><img src=\"../../../../assets/logo-white.png\" alt=\"logo\"></button>\n    <span class=\"spacer\"></span>\n\n    <button class=\"nav-btn\" *ngIf=\"!authService.isUserLoggedIn()\" routerLink=\"signup\" mat-button>SignUp</button>\n    <button class=\"nav-btn\" *ngIf=\"!authService.isUserLoggedIn()\" routerLink=\"login\" mat-button>Login</button>\n\n    <button class=\"nav-btn\" mat-button *ngIf=\"authService.isUserLoggedIn()\" [matMenuTriggerFor]=\"menu\">\n      <mat-icon>account_circle</mat-icon>\n       {{ capFirstLetter(authService.currentUserData.firstName) }} {{ capFirstLetter(authService.currentUserData.lastName) }}\n    </button>\n\n    <mat-menu #menu=\"matMenu\">\n      <button class=\"justifier\" mat-menu-item routerLink=\"dashboard\">Dashboard</button>\n      <button class=\"justifier\" mat-menu-item routerLink=\"shop\">Shop</button>\n      <button mat-menu-item (click)=\"onLogOutClick()\">Logout</button>\n    </mat-menu>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h1>\n      Page not found 404\n    </h1>\n    <button mat-button routerLink=\"\">Back to main page</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <div class=\"form-container card\">\n      <div class=\"form-header\">\n        <img src=\"../../../assets/shop-login.png\" class=\"main-lock-icon\" alt=\"\">\n      </div>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onUserLogin()\">\n        <div class=\"form-body\">\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Email</mat-label>\n            <input class=\"form-input\" matInput placeholder=\"Food@Jam.com\" formControlName=\"email\">\n            <mat-error *ngIf=\"loginForm.get('email').errors?.serverError\">\n              {{ loginForm.get('email').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Password</mat-label>\n            <input class=\"form-input\" type=\"password\" matInput placeholder=\"It's a secret...\"\n                   formControlName=\"password\">\n            <mat-error *ngIf=\"loginForm.get('password').errors?.serverError\">\n              {{ loginForm.get('password').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-footer\">\n          <button class=\"btn custom-btn\" mat-raised-button type=\"submit\">\n            <mat-icon> input</mat-icon>\n            <span>  Login</span>\n          </button>\n        </div>\n        <div class=\"additional-link\">\n          <a routerLink=\"/signup\">No Account? <strong>Create one here</strong></a>\n        </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order/order.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order/order.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n\n<div *ngIf=\"this.authService.userCart.products.length === 0\">\n  You have no products in your cart...\n</div>\n\n<!--Main layout-->\n<main *ngIf=\"this.authService.userCart.products.length > 0\">\n  <div class=\"container wow fadeIn\">\n\n    <!-- Heading -->\n    <div class=\"checkout-header\">\n      <h2 class=\"h2\">Checkout</h2>\n      <button mat-button routerLink=\"/shop\">Back To the Shop</button>\n    </div>\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n      <!--Grid column-->\n      <div class=\"col-md-8 mb-4\">\n\n        <!--Card-->\n        <div class=\"card\">\n\n          <!--Card content-->\n          <form [formGroup]=\"orderForm\" (ngSubmit)=\"onOrderSubmit()\" class=\"card-body\">\n\n            <!--Grid row-->\n            <div class=\"row\">\n\n              <!--Grid column-->\n              <div class=\"col\">\n\n                <!--billingName-->\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Billing Name</mat-label>\n                  <input matInput\n                         formControlName=\"billingName\"\n                         id=\"billingName\"\n                         type=\"text\"\n                  >\n                  <mat-hint>Name for the receipt</mat-hint>\n                </mat-form-field>\n                <!--billingName-->\n\n              </div>\n              <!--Grid column-->\n\n            </div>\n            <!--Grid row-->\n\n            <!--Grid column-->\n            <div class=\"row\">\n              <div class=\"col\">\n\n                <!--Street-->\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Street</mat-label>\n                  <input matInput\n                         formControlName=\"street\"\n                         id=\"street\"\n                         type=\"text\"\n                         (dblclick)=\"setUserAddress()\">\n                  <mat-hint>Hint: Double click to fill your address</mat-hint>\n                  <mat-error *ngIf=\"orderForm.get('street').errors?.serverError\">\n                    {{ orderForm.get('street').errors?.serverError }}\n                  </mat-error>\n                </mat-form-field>\n                <!--Street-->\n\n              </div>\n            </div>\n            <!--Grid column-->\n\n\n            <!--Grid row-->\n            <div class=\"row\">\n\n              <!--Grid column-->\n              <div class=\"col\">\n\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Your City</mat-label>\n                  <mat-select placeholder=\"City\" formControlName=\"city\">\n                    <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                      {{city.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"orderForm.get('city').errors?.serverError\">\n                    {{ orderForm.get('city').errors?.serverError }}\n                  </mat-error>\n                </mat-form-field>\n\n              </div>\n\n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col\">\n\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Delivery Date</mat-label>\n                  <input matInput\n                         readonly\n                         [matDatepicker]=\"deliveryDate\"\n                         [matDatepickerFilter]=\"myFilter\"\n                         [min]=\"minDate\"\n                         (click)=\"deliveryDate.open()\"\n                         formControlName=\"deliveryDate\"\n                         placeholder=\"Choose a date\"\n                  >\n                  <mat-datepicker-toggle matSuffix [for]=\"deliveryDate\"></mat-datepicker-toggle>\n                  <mat-datepicker touchUi [dateClass]=\"dateClass\" #deliveryDate></mat-datepicker>\n                  <mat-hint>A red date indicates that all deliveries are busy</mat-hint>\n                  <mat-error *ngIf=\"orderForm.get('deliveryDate').errors?.serverError\">\n                    {{ orderForm.get('deliveryDate').errors?.serverError }}\n                  </mat-error>\n                </mat-form-field>\n\n              </div>\n\n            </div>\n            <!--Grid row-->\n            <hr>\n\n            <div class=\"d-block my-3\">\n              <div class=\"custom-control custom-radio\">\n                <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n              </div>\n            </div>\n            <div class=\"row\">\n\n              <div class=\"col-md-6 mb-3\">\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Name on Card</mat-label>\n                  <input matInput\n                         formControlName=\"cardName\"\n                         id=\"cardName\"\n                         type=\"text\">\n                  <mat-error *ngIf=\"orderForm.get('cardName').errors?.serverError\">\n                    {{ orderForm.get('cardName').errors?.serverError }}</mat-error>\n                </mat-form-field>\n\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Credit Card</mat-label>\n                  <input matInput\n                         formControlName=\"creditCard\"\n                         id=\"creditCard\"\n                         type=\"number\">\n                  <mat-error *ngIf=\"orderForm.get('creditCard').errors?.serverError\">\n                    {{ orderForm.get('creditCard').errors?.serverError }}\n                  </mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>Expiration</mat-label>\n                  <input matInput\n                         formControlName=\"expiration\"\n                         id=\"expiration\"\n                         type=\"text\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <mat-form-field appearance=\"outline\" class=\"justifier\">\n                  <mat-label>CVV</mat-label>\n                  <input matInput\n                         formControlName=\"cvv\"\n                         id=\"cvv\"\n                         type=\"number\">\n                  <mat-error *ngIf=\"orderForm.get('cvv').errors?.serverError\">\n                    {{ orderForm.get('cvv').errors?.serverError }}</mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <hr class=\"mb-4\">\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Submit Your Order</button>\n\n          </form>\n\n        </div>\n        <!--/.Card-->\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-4 mb-4\">\n\n        <!-- Heading -->\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Your cart</span>\n          <span class=\"badge badge-secondary badge-pill\">{{ currentCartProducts.length }}</span>\n        </h4>\n\n        <span>\n            <form>\n              <mat-form-field appearance=\"outline\" class=\"justifier cartSearch\">\n              <input matInput autocomplete=\"off\" type=\"search\" name=\"searchValue\" placeholder=\"Search\"\n                     [(ngModel)]=\"searchValue\">\n              </mat-form-field>\n            </form>\n          </span>\n\n        <!-- Cart -->\n        <ul *ngIf=\"this.authService.userCart.products.length > 0 && !isLoading\"\n            class=\"list-group mb-3 z-depth-1\">\n          <li *ngFor=\"let cartProduct of currentCartProducts\"\n              class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <img class=\"thumbnail\" [src]=\"productsForCart[cartProduct._id].imageURL\" alt=\"...\">\n            </div>\n            <div class=\"pSummary\">\n              <h6 ngxTextHighlight\n                  [content]=\"capFirstLetter(productsForCart[cartProduct._id].name)\"\n                  [searchTerm]=\"searchValue\"\n                  [caseSensitive]=\"false\"\n                  class=\"my-0\"></h6>\n              <small class=\"text-muted\">{{ cartProduct.quantity }}X</small>\n            </div>\n            <span\n              class=\"text-muted\">{{ productsForCart[cartProduct._id].price * cartProduct.quantity | currency: 'USD'}}</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total (USD)</span>\n            <strong>{{ totalPrice | currency: 'USD' }}</strong>\n          </li>\n        </ul>\n        <!-- Cart -->\n\n        <!-- Promo code -->\n        <!--        <form class=\"card p-2\">-->\n        <!--          <div class=\"input-group\">-->\n        <!--            <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">-->\n        <!--            <div class=\"input-group-append\">-->\n        <!--              <button class=\"btn btn-secondary btn-md waves-effect m-0\" type=\"button\">Redeem</button>-->\n        <!--            </div>-->\n        <!--          </div>-->\n        <!--        </form>-->\n        <!-- Promo code -->\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n  </div>\n</main>\n<!--Main layout-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/shop.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shop-wrapper\">\n  <!--Navbar section-->\n  <nav class=\"navbar navbar-expand-lg navbar-dark nav-props\">\n    <button mat-button class=\"navbar-brand\" (click)=\"drawer.toggle()\">\n      <mat-icon *ngIf=\"totalCartProductsQuantity === 0\">shopping_cart</mat-icon>\n      <mat-icon *ngIf=\"totalCartProductsQuantity > 0\" matBadge=\"{{ currentCartProducts.length }}\" matBadgeColor=\"warn\">\n        shopping_cart\n      </mat-icon>\n    </button>\n\n    <button class=\"navbar-toggler\" type=\"button\"\n            (click)=\"toggleNavbar()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\"\n         [ngClass]=\"{ 'show': navbarOpen }\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <button mat-button style=\"margin: 0 5px\" (click)=\"showAllProducts()\"\n                  [ngClass]=\"categoryId ? null : 'active-btn'\"\n          >All Products\n          </button>\n        </li>\n\n        <li class=\"nav-item\" *ngFor=\"let category of categories\">\n          <button mat-button style=\"margin: 0 5px\" (click)=\"filterProductsByCategory(category._id)\"\n                  [ngClass]=\"categoryId === category._id ? 'active-btn' : null\"\n          > {{ category.name }}</button>\n        </li>\n\n        <form *ngIf=\"searchInputOn\">\n          <mdb-icon fas icon=\"search\" aria-hidden=\"true\"></mdb-icon>\n          <input class=\"form-control form-control-sm ml-3 w-75\"\n                 mdbInput\n                 type=\"text\"\n                 placeholder=\"Search\"\n                 aria-label=\"Search\"\n                 [formControl]=\"control\"\n                 [(ngModel)]=\"searchValue\"\n                 (keyup)=\"onUserSearch($event.target.value)\">\n        </form>\n      </ul>\n    </div>\n  </nav>\n\n\n  <mat-drawer-container class=\"sidebar-container\" autosize>\n  <!--Cart Sidebar Section-->\n    <mat-drawer #drawer class=\"sidebar-wrapper\" mode=\"side\">\n      <div *ngIf=\"this.authService.userCart.products.length === 0\">You Have no products in your cart</div>\n      <div *ngIf=\"this.authService.userCart.products.length > 0 && !isLoading\">\n        <div class=\"cart-head\">\n          <button class=\"cart-header-button\" mat-button routerLink=\"/order\">CHECKOUT</button>\n          <button class=\"cart-header-button\" mat-button (click)=\"emptyCart()\">CLEAR CART</button>\n          <div class=\"cart-header-total\">Total {{ totalPrice | currency: 'USD' }}</div>\n        </div>\n        <div class=\"cart-product-row\" *ngFor=\"let cartProduct of currentCartProducts\">\n          <div>\n            <img class=\"thumbnail\" [src]=\"productsForCart[cartProduct._id].imageURL\" alt=\"...\">\n          </div>\n          <ul class=\"\" style=\"text-align: center\">\n            <li>\n            <span style=\"font-weight: bolder\">{{ cartProduct.quantity }}\n              X</span> {{ capFirstLetter(productsForCart[cartProduct._id].name) }}\n              <div>{{ productsForCart[cartProduct._id].price * cartProduct.quantity | currency: 'USD'}}</div>\n            </li>\n          </ul>\n          <button mat-button (click)=\"deleteProductFromCart(cartProduct._id)\">\n            <mat-icon>remove_shopping_cart</mat-icon>\n          </button>\n        </div>\n\n      </div>\n    </mat-drawer>\n\n    <!--  All Products Section-->\n    <div class=\"products-section\">\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n      <div *ngIf=\"!isLoading\">\n        <div *ngIf=\"!productsByCategory\">\n\n          <div class=\"search-results\" *ngIf=\"searchValue && !numOfSearchResults\">No products found</div>\n          <div class=\"search-results\" *ngIf=\"searchValue && numOfSearchResults !== 0\">\n            Results: {{ numOfSearchResults }}</div>\n\n          <div class=\"row\">\n            <mdb-card class=\"col-lg-2 col-md-4 col-sm-6 p-card\" *ngFor=\"let item of products | keyvalue\">\n              <div class=\"to-center productImg\">\n                <img class=\"card-img-top\" [src]=\"products[item.key].imageURL\">\n              </div>\n              <div class=\"mat-card-content\">\n                <h4 class=\"to-center\" style=\"text-align: center\">{{ capFirstLetter(products[item.key].name) }}</h4>\n                <p class=\"to-center\">{{ products[item.key].price | currency: 'USD'}}</p>\n                <div class=\"card-footer\">\n                  <button *ngIf=\"item.key !== productId; else updateQuantity\"\n                          mat-button style=\"background: white\" class=\"justifier\"\n                          (click)=\"addToCart(item.key)\">Add to Cart\n                  </button>\n                  <ng-template #updateQuantity>\n                    <form>\n                      <div class=\"to-center quantity-section\">\n                        <button class=\"col-2 qnt-btn\" mat-button (click)=\"removeItem(item.key)\">\n                          <mat-icon>remove_circle</mat-icon>\n                        </button>\n                        <div class=\"col input-box\">\n                          <input type=\"number\" [min]=\"0\" class=\"input-res to-center\" name=\"quantity\"\n                                 [(ngModel)]=\"quantity\"\n                                 oninput=\"validity.valid || (value ='')\"\n                                 (keydown)=\"allowNumbersOnly($event)\"\n                                 (click)=\"showQuantityButton()\"\n                          >\n                        </div>\n                        <button class=\"col-2 qnt-btn\" mat-button (click)=\"addItem(item.key)\">\n                          <mat-icon>add_circle</mat-icon>\n                        </button>\n                      </div>\n                      <p class=\"in-cart\" *ngIf=\"productId === item.key && quantity > 0 && !quantityButtonActive\">In\n                        Cart</p>\n                      <button *ngIf=\"productId === item.key && quantityButtonActive\"\n                              mat-button\n                              class=\"justifier\"\n                              (click)=\"sendToCart(item.key, quantity)\">Change Quantity\n                      </button>\n                    </form>\n                  </ng-template>\n                </div>\n              </div>\n            </mdb-card>\n          </div>\n        </div>\n\n        <!--Products by Category-->\n        <div>\n          <div class=\"row\">\n            <mdb-card class=\"col-lg-2 col-md-4 col-sm-6 p-card\" *ngFor=\"let item of productsByCategory\">\n              <div class=\"to-center productImg\">\n                <img class=\"card-img-top\" [src]=\"item.imageURL\" [alt]=\"item.imageURL\">\n              </div>\n              <div class=\"mat-card-content\">\n                <h4 class=\"to-center\" style=\"text-align: center\"> {{ capFirstLetter(item.name) }} </h4>\n                <p class=\"to-center\"> {{ item.price | currency:'USD'}} </p>\n                <div class=\"card-footer\">\n                  <button *ngIf=\"item._id !== productId\" mat-button\n                          style=\"background: white\"\n                          class=\"justifier\"\n                          (click)=\"addToCart(item._id)\">Add To Cart\n                  </button>\n                  <div *ngIf=\"productId === item._id\" class=\"to-center quantity-section\">\n                    <button class=\"col-2 qnt-btn\" mat-button (click)=\"removeItem(item._id)\">\n                      <mat-icon>remove_circle</mat-icon>\n                    </button>\n                    <div class=\"col input-box\">\n                      <input type=\"number\" [min]=\"0\" class=\"input-res to-center\" name=\"quantity\" [(ngModel)]=\"quantity\"\n                             oninput=\"validity.valid || (value ='')\"\n                             (keydown)=\"allowNumbersOnly($event)\"\n                             (click)=\"showQuantityButton()\">\n                    </div>\n                    <button class=\"col-2 qnt-btn\" mat-button (click)=\"addItem(item._id)\">\n                      <mat-icon>add_circle</mat-icon>\n                    </button>\n                  </div>\n                  <p class=\"in-cart\" *ngIf=\"productId === item._id && quantity > 0 && !quantityButtonActive\">In Cart</p>\n\n                  <button *ngIf=\"productId === item._id && quantityButtonActive\" mat-button class=\"justifier\"\n                          (click)=\"sendToCart(productId, quantity)\">Change Quantity\n                  </button>\n                </div>\n              </div>\n            </mdb-card>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </mat-drawer-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup-stepper/signup-stepper.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup-stepper/signup-stepper.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-wrapper\">\n  <div class=\"form-container card\">\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n\n        <div class=\"signup-header\">\n          <img src=\"../../../assets/sign-up.png\" class=\"main-sign-icon\" alt=\"\">\n        </div>\n\n        <form (ngSubmit)=\"onFirstStepSubmit(stepper)\" [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>First Step</ng-template>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Identity Number</mat-label>\n            <input matInput placeholder=\"9 Digits...\"\n                   formControlName=\"identityNumber\"\n                   type=\"string\"\n                   (keydown)=\"allowNumbersOnly($event)\"\n            >\n<!--            [min]=\"0\"-->\n            <button mat-icon-button matSuffix>\n              <mat-icon>picture_in_picture</mat-icon>\n            </button>\n            <mat-error *ngIf=\"firstFormGroup.get('identityNumber').errors?.serverError\">\n              {{ firstFormGroup.get('identityNumber').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Email</mat-label>\n            <input matInput placeholder=\"Shopping@Experience.com\" formControlName=\"email\">\n            <button mat-icon-button matSuffix>\n              <mat-icon>mail_outline</mat-icon>\n            </button>\n            <mat-error *ngIf=\"firstFormGroup.get('email').errors?.serverError\">\n              {{ firstFormGroup.get('email').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Password</mat-label>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\"\n                   [type]=\"passHide ? 'password' : 'text'\">\n            <button mat-icon-button matSuffix (click)=\"passHide = !passHide\" [attr.aria-label]=\"'Hide password'\"\n                    [attr.aria-pressed]=\"passHide\">\n              <mat-icon>{{passHide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <mat-error *ngIf=\"firstFormGroup.get('password').errors?.serverError\">\n              {{ firstFormGroup.get('password').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Confirm Password</mat-label>\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"password2\"\n                   [type]=\"passHide ? 'password' : 'text'\">\n            <button mat-icon-button matSuffix (click)=\"passHide = !passHide\" [attr.aria-label]=\"'Hide password'\"\n                    [attr.aria-pressed]=\"passHide\">\n              <mat-icon>{{passHide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <mat-error *ngIf=\"firstFormGroup.get('password2').errors?.serverError\">\n              {{ firstFormGroup.get('password2').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <div class=\"to-center\">\n            <button mat-button class=\"sm-btn custom-btn\" (click)=\"goForward(stepper)\" type=\"submit\">NEXT\n              <mat-icon>forward</mat-icon>\n            </button>\n          </div>\n\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form (ngSubmit)=\"onSecondStepSubmit()\" [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Second Step</ng-template>\n          <div class=\"signup-header\">\n            <img src=\"../../../assets/truck.png\" class=\"main-sign-icon\" alt=\"\">\n          </div>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your First Name</mat-label>\n            <input matInput placeholder=\"John\"\n                   formControlName=\"firstName\">\n            <button mat-icon-button matSuffix>\n              <mat-icon>face</mat-icon>\n            </button>\n            <mat-error *ngIf=\"secondFormGroup.get('firstName').errors?.serverError\">\n              {{ secondFormGroup.get('firstName').errors?.serverError }}\n            </mat-error>\n            <mat-error *ngIf=\"secondFormGroup.controls['firstName'].errors?.pattern\">Please insert characters only\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Last Name</mat-label>\n            <input matInput placeholder=\"Doe\"\n                   formControlName=\"lastName\">\n            <button mat-icon-button matSuffix>\n              <mat-icon>face</mat-icon>\n            </button>\n            <mat-error *ngIf=\"secondFormGroup.get('lastName').errors?.serverError\">\n              {{ secondFormGroup.get('lastName').errors?.serverError }}\n            </mat-error>\n            <mat-error *ngIf=\"secondFormGroup.controls['lastName'].errors?.pattern\">Please insert characters only\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your City</mat-label>\n            <mat-select placeholder=\"City\" formControlName=\"city\">\n              <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                {{city.viewValue}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"secondFormGroup.get('city').errors?.serverError\">\n              {{ secondFormGroup.get('city').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"justifier\">\n            <mat-label>Your Address</mat-label>\n            <input matInput placeholder=\"King George 50 Apt. 4\" formControlName=\"street\">\n            <button mat-icon-button matSuffix>\n              <mat-icon>home</mat-icon>\n            </button>\n            <mat-error *ngIf=\"secondFormGroup.get('street').errors?.serverError\">\n              {{ secondFormGroup.get('street').errors?.serverError }}\n            </mat-error>\n          </mat-form-field>\n\n          <div class=\"to-center\">\n            <button mat-button class=\"sm-btn custom-btn \" matStepperPrevious>BACK\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button mat-button class=\"sm-btn custom-btn\" type=\"submit\"\n                    style=\"margin:0 7px\">CONTINUE\n              <mat-icon>shopping_cart</mat-icon>\n            </button>\n          </div>\n\n        </form>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gurds/auth.gurd */ "./src/app/gurds/auth.gurd.ts");
/* harmony import */ var _gurds_admin_gurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gurds/admin.gurd */ "./src/app/gurds/admin.gurd.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signup_stepper_signup_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup-stepper/signup-stepper.component */ "./src/app/components/signup-stepper/signup-stepper.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/not-found/not-found.component */ "./src/app/components/layout/not-found/not-found.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");














const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'signup', component: _components_signup_stepper_signup_stepper_component__WEBPACK_IMPORTED_MODULE_6__["SignupStepperComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'order', component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'invoice', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], canActivate: [_gurds_admin_gurd__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]] },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n}\n\napp-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.page {\n  padding-top: 60px;\n  min-height: calc(100vh - 50px);\n  overflow-y: auto;\n}\n\napp-footer {\n  position: relative;\n  width: 100%;\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGFnZSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmFwcC1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuIiwiLmFwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGFnZSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmFwcC1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gurds/auth.gurd */ "./src/app/gurds/auth.gurd.ts");
/* harmony import */ var _gurds_admin_gurd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gurds/admin.gurd */ "./src/app/gurds/admin.gurd.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-mat-search-bar */ "./node_modules/ng-mat-search-bar/fesm2015/ng-mat-search-bar.js");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-text-highlight */ "./node_modules/ngx-text-highlight/ngx-text-highlight.umd.js");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! countup.js-angular2 */ "./node_modules/countup.js-angular2/fesm2015/countup.js-angular2.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_signup_stepper_signup_stepper_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/signup-stepper/signup-stepper.component */ "./src/app/components/signup-stepper/signup-stepper.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin-page/edit-modal/edit-modal.component */ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts");
/* harmony import */ var _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/admin-page/add-modal/add-modal.component */ "./src/app/components/admin-page/add-modal/add-modal.component.ts");
/* harmony import */ var _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/layout/not-found/not-found.component */ "./src/app/components/layout/not-found/not-found.component.ts");

// Core Modules //






// Authentication Guards //


// Angular Material + Animations //






















// Components //














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
            _components_signup_stepper_signup_stepper_component__WEBPACK_IMPORTED_MODULE_22__["SignupStepperComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
            _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_25__["ShopComponent"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_26__["OrderComponent"],
            _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_27__["InvoiceComponent"],
            _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_28__["AdminPageComponent"],
            _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"],
            _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_29__["EditModalComponent"],
            _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_30__["AddModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_14__["NgMatSearchBarModule"],
            ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__["NgHighlightModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            countup_js_angular2__WEBPACK_IMPORTED_MODULE_17__["CountUpModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"]
        ],
        entryComponents: [
            _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_29__["EditModalComponent"],
            _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_30__["AddModalComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        providers: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _gurds_admin_gurd__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin-page/add-modal/add-modal.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-page/add-modal/add-modal.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9hZGQtbW9kYWwvYWRkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin-page/add-modal/add-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin-page/add-modal/add-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: AddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalComponent", function() { return AddModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let AddModalComponent = class AddModalComponent {
    constructor(productService, authService, formBuilder, dialogRef, data) {
        this.productService = productService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.authService.loadToken();
        this.adminToken = this.authService.currentUserToken;
        this.addProductForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageURL: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    save() {
        const newProductValues = this.addProductForm.getRawValue();
        const newProduct = {
            name: newProductValues.name.toLowerCase(),
            categoryId: newProductValues.categoryId,
            price: newProductValues.price,
            imageURL: newProductValues.imageURL
        };
        this.productService.createNewProduct(newProduct, this.adminToken).subscribe(data => {
            this.dialogRef.close(data);
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
AddModalComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-modal',
        template: __webpack_require__(/*! raw-loader!./add-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/add-modal/add-modal.component.html"),
        styles: [__webpack_require__(/*! ./add-modal.component.scss */ "./src/app/components/admin-page/add-modal/add-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], AddModalComponent);



/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep html, body {\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  overflow: scroll;\n}\n\n.add-header {\n  padding: 0;\n}\n\n.image {\n  width: 80px;\n  height: 80px;\n}\n\n.add-button {\n  background-color: #13143F !important;\n  color: white;\n  margin: 20px 0;\n  border-radius: 3px;\n  font-weight: bolder;\n}\n\n.add-button:hover {\n  color: bisque;\n}\n\n.edit-btn {\n  background: url('edit.png') no-repeat;\n  cursor: pointer;\n  border: none;\n  margin: 20px 10px;\n  width: 32px;\n  height: 32px;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #303f9f, #45cafc) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsc0NBQUE7RUFBQSxtQ0FBQTtFQUFBLDhCQUFBO0VBQWdDLGdCQUFBO0FDR3JEOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNJRjs7QURDQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsK0RBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGh0bWwsYm9keSB7aGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50OyBvdmVyZmxvdzogc2Nyb2xsfVxuXG4uYWRkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy9ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0M0YgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYWRkLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBiaXNxdWU7XG59XG5cbi5lZGl0LWJ0biB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2VkaXQucG5nJykgbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCMzMDNmOWYsIzQ1Y2FmYykhaW1wb3J0YW50O1xufVxuIiwiOjpuZy1kZWVwIGh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5hZGQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDNGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmFkZC1idXR0b246aG92ZXIge1xuICBjb2xvcjogYmlzcXVlO1xufVxuXG4uZWRpdC1idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZWRpdC5wbmdcIikgbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMzAzZjlmLCAjNDVjYWZjKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/components/admin-page/add-modal/add-modal.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");










let AdminPageComponent = class AdminPageComponent {
    constructor(authService, productService, categoryService, cartService, router, dialog) {
        this.authService = authService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.cartService = cartService;
        this.router = router;
        this.dialog = dialog;
        this.isLoading = true;
    }
    ngOnInit() {
        this.getUserAuthDetails();
        this.getCart();
        this.getAllProducts();
        this.getAllCategories();
    }
    getUserAuthDetails() {
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.admin = this.authService.currentUserData;
        this.adminId = this.authService.currentUserData.id;
        this.adminToken = this.authService.currentUserToken;
    }
    getCart() {
        this.cartService.getUserCartStatus(this.adminId, this.adminToken).subscribe(data => {
            this.authService.storeCartData(data.cart);
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.products = data;
            this.productsLength = data.length;
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.convertArrToObject(data);
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.categories = productsObj;
        this.isLoading = false;
    }
    openEditDialog(productValues, categoriesObject) {
        const dialogRef = this.dialog.open(_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_7__["EditModalComponent"], {
            data: {
                preEditFields: productValues,
                categories: categoriesObject
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getAllProducts();
        });
    }
    openAddDialog(categoriesObject) {
        const dialogRef = this.dialog.open(_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddModalComponent"], {
            data: {
                categories: categoriesObject
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getAllProducts();
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
AdminPageComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: __webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/admin-page.component.html"),
        styles: [__webpack_require__(/*! ./admin-page.component.scss */ "./src/app/components/admin-page/admin-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], AdminPageComponent);



/***/ }),

/***/ "./src/app/components/admin-page/edit-modal/edit-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin-page/edit-modal/edit-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9lZGl0LW1vZGFsL2VkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-page/edit-modal/edit-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let EditModalComponent = class EditModalComponent {
    constructor(productService, authService, formBuilder, dialogRef, data) {
        this.productService = productService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.authService.loadToken();
        this.adminToken = this.authService.currentUserToken;
        this.editProductForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageURL: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        const editForm = this.editProductForm.controls;
        const preEditFields = this.data.preEditFields;
        editForm.categoryId.setValue(preEditFields.categoryId);
        editForm.name.setValue(preEditFields.name);
        editForm.price.setValue(preEditFields.price);
        editForm.imageURL.setValue(preEditFields.imageURL);
    }
    save(productId) {
        const newFormValues = this.editProductForm.getRawValue();
        const editedProduct = {
            name: newFormValues.name.toLowerCase(),
            categoryId: newFormValues.categoryId,
            price: newFormValues.price,
            imageURL: newFormValues.imageURL
        };
        this.productService.editProduct(productId, editedProduct, this.adminToken).subscribe(data => {
            this.dialogRef.close(data);
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
EditModalComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-modal',
        template: __webpack_require__(/*! raw-loader!./edit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/edit-modal/edit-modal.component.html"),
        styles: [__webpack_require__(/*! ./edit-modal.component.scss */ "./src/app/components/admin-page/edit-modal/edit-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], EditModalComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-wrapper {\n  height: calc(100vh - 110px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #121348;\n}\n\n.welcome-section {\n  display: flex;\n  padding-block: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\n.welcome-text {\n  color: wheat;\n}\n\n.welcome-image-container {\n  text-align: center;\n}\n\n.welcome-image {\n  width: 60%;\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s;\n}\n\nh4 {\n  color: wheat;\n}\n\n.counters-section {\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between;\n}\n\n.shop-btns {\n  margin: 15px 0;\n}\n\n.counter {\n  padding: 20px 0;\n  gap: 10px;\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n\n.mat-fab {\n  font-size: 38px;\n}\n\n.productBag {\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n\n.orderBag {\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n\n.counter-blue {\n  background-color: #23346F;\n}\n\n.custom-blue {\n  background: linear-gradient(40deg, #45cafc, #13143F) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsK0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEzNDg7XG59XG5cbi53ZWxjb21lLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gIGNvbG9yOiB3aGVhdDtcbn1cbi53ZWxjb21lLWltYWdlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtaW1hZ2Uge1xuICB3aWR0aDogNjAlO1xuICBhbmltYXRpb246IGZhZGVpbiAycztcbn1cblxuaDQge1xuICBjb2xvcjogd2hlYXQ7XG59XG5cbi5jb3VudGVycy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4uc2hvcC1idG5zIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5jb3VudGVyIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBnYXA6IDEwcHg7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xufVxuXG4ubWF0LWZhYiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLnByb2R1Y3RCYWcge1xuICBhbmltYXRpb246IGZhZGVpbiAxcztcbn1cblxuLm9yZGVyQmFnIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG59XG5cbi5jb3VudGVyLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNDZGO1xufVxuXG4uY3VzdG9tLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMxMzE0M0YpICFpbXBvcnRhbnQ7XG59XG4iLCIuZGFzaGJvYXJkLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4O1xufVxuXG4ud2VsY29tZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lLXRleHQge1xuICBjb2xvcjogd2hlYXQ7XG59XG5cbi53ZWxjb21lLWltYWdlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtaW1hZ2Uge1xuICB3aWR0aDogNjAlO1xuICBhbmltYXRpb246IGZhZGVpbiAycztcbn1cblxuaDQge1xuICBjb2xvcjogd2hlYXQ7XG59XG5cbi5jb3VudGVycy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNob3AtYnRucyB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uY291bnRlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZ2FwOiAxMHB4O1xuICBhbmltYXRpb246IGZhZGVpbiAxcztcbn1cblxuLm1hdC1mYWIge1xuICBmb250LXNpemU6IDM4cHg7XG59XG5cbi5wcm9kdWN0QmFnIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG59XG5cbi5vcmRlckJhZyB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xufVxuXG4uY291bnRlci1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzQ2Rjtcbn1cblxuLmN1c3RvbS1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMTMxNDNGKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let DashboardComponent = class DashboardComponent {
    constructor(authService, productService, cartService, orderService) {
        this.authService = authService;
        this.productService = productService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.isLoading = true;
        this.continueShopButton = false;
        this.capFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
    }
    ngOnInit() {
        this.getUserAuthDetails();
        this.getUserCartStatus();
        this.getAllProducts();
        this.getAllOrders();
        this.getAllCheapProducts();
    }
    getUserAuthDetails() {
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.user = this.authService.currentUserData;
        this.userId = this.authService.currentUserData.id;
        this.userToken = this.authService.currentUserToken;
    }
    getUserCartStatus() {
        this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
            // IF cart has been initialized
            if (data.status === 0) {
                this.orderService.checkIfUserHasOrder(this.userId, this.userToken).subscribe(data => {
                    if (data[0]) {
                        this.dashboardMessage = "Your Last Order From: " + (new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en').transform(data[0].orderDate, 'dd/MM/yyyy'));
                        this.messageStatus = 2;
                    }
                    else {
                        this.dashboardMessage = 'Click Below To Start Your First FOODJAM Experience';
                        this.messageStatus = 0;
                    }
                });
                this.authService.storeCartData(data.cart);
                return;
            }
            // IF the user cart has products init
            if (data.status === 1) {
                this.dashboardMessage = data.msg;
                this.messageStatus = 1;
                this.continueShopButton = true;
                this.authService.storeCartData(data.cart);
                return;
                // IF the user is new
            }
            else {
                this.dashboardMessage = 'Click Below To Start Your First FOODJAM Experience';
                this.messageStatus = 0;
                const userId = { userId: this.userId };
                this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
                    this.authService.storeCartData(data.cart);
                });
            }
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.numOfProducts = data.length;
            this.isLoading = false;
        });
    }
    getAllOrders() {
        this.orderService.getOrdersLength().subscribe(data => {
            this.numOfOrders = data;
        });
    }
    getAllCheapProducts() {
        this.productService.getCheapProductsLength().subscribe(data => {
            this.numOfCheapProducts = data;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  height: 100%;\n}\n\n.container {\n  padding: 0 36px;\n}\n\n.bg-primary {\n  margin-bottom: 0 !important;\n  background-color: #121348 !important;\n  color: bisque !important;\n}\n\n.text-white {\n  color: bisque !important;\n}\n\n.btn-primary {\n  background-color: #121348 !important;\n  color: white;\n  margin: 0;\n}\n\n.btn-primary:hover {\n  color: bisque;\n}\n\n.info-secondary {\n  background-color: #F8AC43;\n  color: #121348;\n  padding-top: 50px;\n}\n\n.header-img {\n  width: 100%;\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s;\n}\n\n.product-cards {\n  padding: 30px;\n  background-color: #121348;\n  text-align: center;\n}\n\n.img-card {\n  margin-top: 15px;\n  width: 30%;\n}\n\n.catalog-header {\n  color: bisque;\n}\n\nmdb-card {\n  border: none;\n}\n\nmdb-card-body {\n  color: bisque;\n}\n\nol.carousel-indicators {\n  margin: -8px !important;\n}\n\n.info-p {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDM2cHg7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBiaXNxdWUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogYmlzcXVlIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTM0OCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6IGJpc3F1ZTtcbn1cblxuLmluZm8tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QUM0MztcbiAgY29sb3I6ICMxMjEzNDg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IGZhZGVpbiAycztcbn1cblxuLnByb2R1Y3QtY2FyZHN7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEzNDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmNhdGFsb2ctaGVhZGVye1xuICBjb2xvcjogYmlzcXVlO1xufVxuXG5tZGItY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubWRiLWNhcmQtYm9keXtcbiAgY29sb3I6IGJpc3F1ZTtcbn1cblxub2wuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIG1hcmdpbjogLThweCAhaW1wb3J0YW50O1xufVxuXG4uaW5mby1wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIiwiLmhvbWUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMzZweDtcbn1cblxuLmJnLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEzNDggIWltcG9ydGFudDtcbiAgY29sb3I6IGJpc3F1ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiBiaXNxdWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTM0OCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6IGJpc3F1ZTtcbn1cblxuLmluZm8tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QUM0MztcbiAgY29sb3I6ICMxMjEzNDg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IGZhZGVpbiAycztcbn1cblxuLnByb2R1Y3QtY2FyZHMge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWctY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jYXRhbG9nLWhlYWRlciB7XG4gIGNvbG9yOiBiaXNxdWU7XG59XG5cbm1kYi1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5tZGItY2FyZC1ib2R5IHtcbiAgY29sb3I6IGJpc3F1ZTtcbn1cblxub2wuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIG1hcmdpbjogLThweCAhaW1wb3J0YW50O1xufVxuXG4uaW5mby1wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");





let HomeComponent = class HomeComponent {
    constructor(authService, productService, orderService) {
        this.authService = authService;
        this.productService = productService;
        this.orderService = orderService;
        this.slides = [[]];
        this.chunk = (arr, chunkSize) => {
            let R = [];
            for (let i = 0, len = arr.length; i < len; i += chunkSize) {
                R.push(arr.slice(i, i + chunkSize));
            }
            return R;
        };
        this.capFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
    }
    ngOnInit() {
        this.productService.getAllProducts().subscribe(data => {
            this.numOfProducts = data.length;
            this.slides = this.chunk(data, 3);
        });
        this.orderService.getOrdersLength().subscribe(data => {
            this.numOfOrders = data;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/invoice/invoice.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let InvoiceComponent = class InvoiceComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.isLoading = true;
        this.hasProducts = true;
    }
    ngOnInit() {
        this.getAllProducts();
        this.currentCartProducts = JSON.parse(localStorage.getItem('invoiceSummary')).products;
        this.totalPrice = JSON.parse(localStorage.getItem('invoiceSummary')).totalCartPrice;
        this.setTotalCartProductsQuantity();
        this.dates = JSON.parse(localStorage.getItem('orderDates'));
        if (this.totalCartProductsQuantity === 0) {
            this.hasProducts = false;
            return;
        }
    }
    captureScreen() {
        const data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrToObject(data);
            this.isLoading = false;
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.productsForCart = productsObj;
    }
    setTotalCartProductsQuantity() {
        const cartProductsQuantityArr = this.currentCartProducts.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    backToDashBoard() {
        this.router.navigate(['dashboard']);
        localStorage.removeItem('orderDates');
        localStorage.removeItem('invoiceSummary');
    }
    ngOnDestroy() { }
};
InvoiceComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/invoice/invoice.component.html"),
        styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/components/invoice/invoice.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], InvoiceComponent);



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  position: relative;\n  height: 50px;\n  background-color: #121348;\n}\n\n.footer .col h1 {\n  margin: 16px;\n  color: white;\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 17px;\n  font-weight: normal;\n  text-transform: uppercase;\n  letter-spacing: 0.25em;\n}\n\n.footer .col ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.footer .col ul li {\n  color: white;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: bold;\n  padding: 5px 0px 5px 0px;\n  cursor: pointer;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n}\n\n.social ul li {\n  display: inline-block;\n  padding-right: 5px !important;\n}\n\n.footer .col ul li:hover {\n  color: #ffffff;\n  transition: 0.1s;\n  -webkit-transition: 0.1s;\n  -moz-transition: 0.1s;\n}\n\n.clearfix {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7QUNJRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4O1xufVxuXG4uZm9vdGVyIC5jb2wgaDEge1xuICBtYXJnaW46IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1MGVtO1xufVxuLmZvb3RlciAuY29sIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uZm9vdGVyIC5jb2wgdWwgbGkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjJzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAuMnM7XG59XG4uc29jaWFsIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciAuY29sIHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IC4xcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogLjFzO1xufVxuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG4iLCIuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4O1xufVxuXG4uZm9vdGVyIC5jb2wgaDEge1xuICBtYXJnaW46IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG59XG5cbi5mb290ZXIgLmNvbCB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9vdGVyIC5jb2wgdWwgbGkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zb2NpYWwgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIC5jb2wgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/layout/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  color: white;\n  background-color: #121348;\n  padding: 0;\n}\n\n.nav-btn:hover {\n  color: bisque;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5hdmJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTM0ODtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdi1idG46aG92ZXIge1xuICBjb2xvcjogYmlzcXVlO1xufVxuIiwiLm5hdmJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTM0ODtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdi1idG46aG92ZXIge1xuICBjb2xvcjogYmlzcXVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.loadUserPayload();
    }
    onLogOutClick() {
        this.authService.logoutUser();
        this.router.navigate(['']);
        return false;
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/layout/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/layout/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layout/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/layout/not-found/not-found.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  height: calc(100vh - 120px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.additional-link a {\n  color: #121348;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREdFO0VBQ0UsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZGl0aW9uYWwtbGluayB7XG4gIGEge1xuICAgIGNvbG9yOiAjMTIxMzQ4O1xuICB9XG59XG4iLCIubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGRpdGlvbmFsLWxpbmsgYSB7XG4gIGNvbG9yOiAjMTIxMzQ4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userIsLoggedIn = false;
    }
    ngOnInit() {
        // Disable route access if already loggedIn
        if (this.authService.isUserLoggedIn()) {
            this.router.navigate(['dashboard']);
        }
        // Load FormBuilder
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onUserLogin() {
        const formValues = this.loginForm.getRawValue();
        const loginDetails = {
            email: formValues.email.toLowerCase(),
            password: formValues.password
        };
        this.authService.loginUser(loginDetails).subscribe(data => {
            if (data.admin) {
                this.authService.storeUserData(data.token, data.admin);
                this.authService.loadUserPayload();
                this.router.navigate(['admin']);
            }
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.authService.loadUserPayload();
                this.router.navigate(['dashboard']);
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.loginForm.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.userIsLoggedIn = false;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/order/order.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ngx-text-highlight {\n  background: yellow;\n}\n\n:host ::ng-deep .cartSearch div.mat-form-field-infix {\n  border-top: 0;\n}\n\n.thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  background-size: cover;\n  border: solid 1px powderblue;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pSummary {\n  text-align: center;\n}\n\n.checkout-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 26px;\n  width: 66%;\n}\n\nh6 {\n  line-height: 1.5;\n}\n\nh2 {\n  margin: 0;\n}\n\n.mb-5, .my-5 {\n  margin-bottom: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5uZ3gtdGV4dC1oaWdobGlnaHR7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJ0U2VhcmNoIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuLnRodW1ibmFpbHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcG93ZGVyYmx1ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLnBTdW1tYXJ5e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja291dC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYmxvY2s6IDI2cHg7XG4gIHdpZHRoOiA2NiU7XG59XG5cbmg2e1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1iLTUsIC5teS01IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSFpbXBvcnRhbnQ7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLm5neC10ZXh0LWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJ0U2VhcmNoIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDA7XG59XG5cbi50aHVtYm5haWwge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IHNvbGlkIDFweCBwb3dkZXJibHVlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ucFN1bW1hcnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja291dC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYmxvY2s6IDI2cHg7XG4gIHdpZHRoOiA2NiU7XG59XG5cbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5tYi01LCAubXktNSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let OrderComponent = class OrderComponent {
    constructor(authService, productService, orderService, cartService, formBuilder, router) {
        this.authService = authService;
        this.productService = productService;
        this.orderService = orderService;
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isLoading = true;
        this.minDate = new Date();
        this.fullyBookedDates = [];
        this.cities = [
            { value: 'Tel-Aviv-0', viewValue: 'Tel Aviv' }, { value: 'Jerusalem-1', viewValue: 'Jerusalem' },
            { value: 'Haifa-2', viewValue: 'Haifa' }, { value: 'Beer Sheva-3', viewValue: 'Beer Sheva' },
            { value: 'Natenya-4', viewValue: 'Netanya' }, { value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion' },
            { value: 'Rehovot-6', viewValue: 'Rehovot' }, { value: 'Eilat-7', viewValue: 'Eilat' },
            { value: 'Kfar-Saba-8', viewValue: 'Kfar Saba' }, { value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona' },
        ];
        this.myFilter = (d) => {
            const day = d.getDay();
            return (!this.fullyBookedDates.includes(d.valueOf()));
        };
        this.dateClass = (d) => {
            const day = d.getDay();
            return (this.fullyBookedDates.includes(d.valueOf())) ? 'occupied-date-class' : undefined;
        };
    }
    ngOnInit() {
        this.authService.loadUserCart();
        this.authService.loadToken();
        this.userToken = this.authService.currentUserToken;
        this.userId = this.authService.userCart.userId;
        this.cartId = this.authService.userCart._id;
        this.getAllProducts();
        this.getFullyBookedDates();
        this.currentCartProducts = this.authService.userCart.products;
        this.getCartTotalPrice();
        this.setTotalCartProductsQuantity();
        this.orderForm = this.formBuilder.group({
            billingName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            deliveryDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            creditCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cardName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            expiration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    onOrderSubmit() {
        const orderDetails = this.orderForm.getRawValue();
        const cardName = orderDetails.cardName;
        const creditCard = orderDetails.creditCard.toString();
        const cvv = orderDetails.cvv.toString();
        const deliveryDate = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en').transform(orderDetails.deliveryDate, 'yyyy/MM/dd');
        const products = this.authService.userCart.products;
        const order = {
            userId: this.userId,
            cartId: this.cartId,
            totalPrice: this.totalPrice,
            city: orderDetails.city,
            street: orderDetails.street,
            deliveryDate: deliveryDate,
            cardName: cardName,
            creditCard: creditCard,
            cvv: cvv,
            products: products
        };
        this.orderService.createNewOrder(order, this.userToken).subscribe(data => {
            if (data.success) {
                const orderDates = {
                    deliveryDate: new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en').transform(deliveryDate, 'dd/MM/yyyy'),
                    orderDate: new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en').transform(new Date(), 'dd/MM/yyyy')
                };
                localStorage.setItem('orderDates', JSON.stringify(orderDates));
                const userId = { userId: this.userId };
                this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
                    this.authService.storeCartData(data.cart);
                });
                this.router.navigate(['invoice']);
                localStorage.setItem('invoiceSummary', localStorage.getItem('cart'));
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.orderForm.get(prop);
                    if (formControl) {
                        // activate the error messages
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
            }
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrToObject(data);
            this.isLoading = false;
        });
    }
    getCartTotalPrice() {
        this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
            this.totalPrice = data.cart.totalCartPrice;
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.productsForCart = productsObj;
    }
    setUserAddress() {
        this.authService.loadUserPayload();
        this.orderForm.controls['city'].setValue(this.authService.currentUserData.city);
        this.orderForm.controls['street'].setValue(this.authService.currentUserData.street);
    }
    setTotalCartProductsQuantity() {
        const cartProductsQuantityArr = this.currentCartProducts.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
    getFullyBookedDates() {
        this.orderService.getFullyBookedDates(this.userToken).subscribe(data => {
            this.fullyBookedDates = data.map(obj => new Date(obj.date).getTime());
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order/order.component.html"),
        styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/components/order/order.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], OrderComponent);



/***/ }),

/***/ "./src/app/components/shop/shop.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop-wrapper {\n  height: calc(100vh - 110px);\n}\n\n.nav-props {\n  background-color: #121348;\n  color: #fff;\n}\n\n.navbar-dark .navbar-toggler {\n  margin: 0 15px;\n}\n\n.active-btn {\n  color: bisque;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border: 0;\n}\n\n.search-results {\n  text-align: center;\n  margin: 10px;\n  font-weight: 600;\n}\n\n.expandable:target {\n  height: 50px;\n}\n\n.sidebar-container {\n  min-height: 630px;\n}\n\n.sidebar-wrapper {\n  width: 30%;\n  min-height: 630px;\n  padding: 16px 20px;\n}\n\n.p-card {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 0;\n}\n\n.cart-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block: 20px;\n}\n\n.cart-product-row {\n  display: flex;\n  align-items: center;\n  padding-inline: 16px;\n  margin-bottom: 24px;\n  justify-content: space-between;\n}\n\n.cart-header-button {\n  padding-block: 12px;\n  border-radius: 0;\n  align-items: center;\n}\n\n.cart-header-total {\n  min-width: 20px;\n  text-align: center;\n  padding: 6px;\n}\n\n.quantity-section {\n  margin-bottom: 2px;\n}\n\n.in-cart {\n  font-size: 13px;\n  color: #121348;\n  font-weight: bolder;\n  margin: auto;\n  text-align: center;\n}\n\n.card-footer {\n  padding: 0;\n}\n\n.row {\n  margin: auto;\n  padding-bottom: 2px;\n}\n\n.cart-item-img {\n  width: 100%;\n}\n\n.mat-card {\n  padding: 0;\n}\n\n.card-img-top {\n  width: 40%;\n  max-width: 300px;\n}\n\n.productImg {\n  padding: 22px;\n}\n\n.cartImg {\n  padding: 5px;\n}\n\n.cartItem {\n  padding: 2px 0 10px 0;\n}\n\n.input-res {\n  background: #F7F7F7;\n  border: none;\n  text-align: center;\n  padding-left: 13px;\n  font-size: 18px;\n  font-weight: 500;\n  width: 100%;\n  height: 100%;\n  max-width: 500px;\n  box-sizing: border-box;\n}\n\n.input-box {\n  padding: 0;\n}\n\n.qnt-btn {\n  color: #121348;\n  border-radius: 0;\n  padding: 0;\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxzQ0FBQTtFQUNBLHdFQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG59XG5cbi5uYXYtcHJvcHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMzQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4uYWN0aXZlLWJ0biB7XG4gIGNvbG9yOiBiaXNxdWU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV4cGFuZGFibGU6dGFyZ2V0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbiAgLy9tYXgtaGVpZ2h0OiA2MzBweDtcbiAgLy9tYXJnaW46IGF1dG87XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICB3aWR0aDogMzAlO1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xufVxuXG4ucC1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FydC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYmxvY2s6IDIwcHg7XG5cbn1cblxuLmNhcnQtcHJvZHVjdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWlubGluZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FydC1oZWFkZXItYnV0dG9uIHtcbiAgcGFkZGluZy1ibG9jazogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcnQtaGVhZGVyLXRvdGFsIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLnF1YW50aXR5LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pbi1jYXJ0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzEyMTM0ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5jYXJ0LWl0ZW0taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4ucHJvZHVjdEltZyB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5cbi5jYXJ0SW1nIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY2FydEl0ZW0ge1xuICBwYWRkaW5nOiAycHggMCAxMHB4IDA7XG59XG5cbi5pbnB1dC1yZXMge1xuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbnB1dC1ib3gge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucW50LWJ0biB7XG4gIGNvbG9yOiAjMTIxMzQ4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDA7XG59XG4iLCIuc2hvcC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xufVxuXG4ubmF2LXByb3BzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTM0ODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXIge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLmFjdGl2ZS1idG4ge1xuICBjb2xvcjogYmlzcXVlO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV4cGFuZGFibGU6dGFyZ2V0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciB7XG4gIHdpZHRoOiAzMCU7XG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG59XG5cbi5wLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FydC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYmxvY2s6IDIwcHg7XG59XG5cbi5jYXJ0LXByb2R1Y3Qtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhcnQtaGVhZGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmctYmxvY2s6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJ0LWhlYWRlci10b3RhbCB7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5xdWFudGl0eS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uaW4tY2FydCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMxMjEzNDg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uY2FydC1pdGVtLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnByb2R1Y3RJbWcge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4uY2FydEltZyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNhcnRJdGVtIHtcbiAgcGFkZGluZzogMnB4IDAgMTBweCAwO1xufVxuXG4uaW5wdXQtcmVzIHtcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW5wdXQtYm94IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnFudC1idG4ge1xuICBjb2xvcjogIzEyMTM0ODtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ShopComponent = class ShopComponent {
    constructor(authService, categoryService, productService, cartService) {
        this.authService = authService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.cartService = cartService;
        this.isLoading = true;
        this.navbarOpen = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.searchInputOn = true;
        this.quantityButtonActive = false;
        this.searchValue = '';
    }
    ngOnInit() {
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.authService.loadUserCart();
        this.userId = this.authService.currentUserData.id;
        this.userToken = this.authService.currentUserToken;
        this.cartId = this.authService.userCart._id;
        this.getAllProducts();
        this.getUserCartStatus();
        this.getAllCategories();
        this.setTotalCartProductsQuantity();
    }
    showAllProducts() {
        this.categoryId = null;
        this.productsByCategory = null;
        this.searchInputOn = true;
    }
    filterProductsByCategory(categoryId) {
        this.categoryId = categoryId;
        this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
            this.productsByCategory = data;
            this.searchInputOn = false;
        });
    }
    deleteProductFromCart(_id) {
        const productId = { _id };
        this.cartService.deleteProductFromCart(this.cartId, productId, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
            this.setTotalPrice();
            this.setTotalCartProductsQuantity();
        });
        if (this.currentCartProducts.length === 1) {
            const status = { isOpen: 0 };
            const cartId = this.cartId;
            this.updateCartStatus(cartId, status);
        }
    }
    emptyCart() {
        this.cartService.deleteAllProductsFromCart(this.cartId, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
            this.setTotalPrice();
            this.setTotalCartProductsQuantity();
        });
        const status = { isOpen: 0 };
        const cartId = this.cartId;
        this.updateCartStatus(cartId, status);
        this.quantity = 0;
    }
    addToCart(productId) {
        const cartProduct = this.currentCartProducts.find(product => product._id === productId);
        if (cartProduct === undefined) {
            this.productId = productId;
            this.quantity = 0;
        }
        else if (cartProduct._id === productId) {
            this.quantity = cartProduct.quantity;
            this.productId = productId;
        }
        this.quantityButtonActive = false;
    }
    addItem(_id) {
        this.quantity += 1;
        this.sendToCart(_id, this.quantity);
        this.quantityButtonActive = false;
    }
    removeItem(_id) {
        if (this.quantity - 1 === 0) {
            this.deleteProductFromCart(_id);
            this.quantity -= 1;
        }
        if (this.quantity > 1) {
            this.quantity -= 1;
            this.sendToCart(_id, this.quantity);
        }
        this.quantityButtonActive = false;
    }
    sendToCart(_id, quantity) {
        if (quantity === null) {
            return;
        }
        if (quantity === 0) {
            this.deleteProductFromCart(_id);
            return;
        }
        const addedProduct = { _id, quantity };
        const cartId = this.cartId;
        const cartStatus = this.authService.userCart.isOpen;
        if (cartStatus === 0) {
            const status = { isOpen: 1, date: new Date() };
            this.updateCartStatus(cartId, status);
        }
        this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
            this.setTotalPrice();
            this.setTotalCartProductsQuantity();
        });
        this.quantityButtonActive = false;
    }
    setTotalPrice() {
        this.totalPrice = 0;
        for (let i = 0; i < this.currentCartProducts.length; i++) {
            this.totalPrice += (this.currentCartProducts[i].quantity * this.productsForCart[this.currentCartProducts[i]._id].price);
        }
        this.updateCartTotalPrice();
    }
    onUserSearch(searchValue) {
        const search = searchValue.toLowerCase();
        this.productService.searchProducts(search).subscribe(data => {
            const valueFound = data;
            const results = {};
            for (let i = 0; i < valueFound.length; i++) {
                results[valueFound[i]._id] = valueFound[i];
            }
            this.products = results;
            this.numOfSearchResults = valueFound.length;
        });
    }
    updateLocalStorage(cartData) {
        this.authService.storeCartData(cartData);
        this.authService.loadUserCart();
        this.currentCartProducts = this.authService.userCart.products;
    }
    updateCartStatus(cartId, cartStatus) {
        this.cartService.updateCartStatus(cartId, cartStatus, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrToObject(data);
            this.productsLength = Object.keys(data).length;
        });
    }
    getUserCartStatus() {
        this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
            this.currentCartProducts = data.cart.products;
            this.totalPrice = data.cart.totalCartPrice;
            // this.setTotalPrice();
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
            this.isLoading = false;
        });
    }
    updateCartTotalPrice() {
        const totalCartPrice = { totalCartPrice: this.totalPrice };
        this.cartService.setCartTotalPrice(this.cartId, totalCartPrice, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.products = productsObj;
        this.productsForCart = productsObj;
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    setTotalCartProductsQuantity() {
        const cartProductsArr = this.authService.userCart.products;
        const cartProductsQuantityArr = cartProductsArr.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    showQuantityButton() {
        this.quantityButtonActive = true;
    }
    allowNumbersOnly(e) {
        const code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
};
ShopComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/components/shop/shop.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], ShopComponent);



/***/ }),

/***/ "./src/app/components/signup-stepper/signup-stepper.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/signup-stepper/signup-stepper.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-wrapper {\n  height: calc(100vh - 120px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmVuY29oZW4vUmVwb3Mvc2hvcHBpbmctZXhwZXJpZW5jZS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC1zdGVwcGVyL3NpZ251cC1zdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC1zdGVwcGVyL3NpZ251cC1zdGVwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtc3RlcHBlci9zaWdudXAtc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuc2lnbnVwLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/signup-stepper/signup-stepper.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/signup-stepper/signup-stepper.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignupStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupStepperComponent", function() { return SignupStepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupStepperComponent = class SignupStepperComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isLinear = false;
        this.formIsValid = false;
        this.userIsRegistered = false;
        this.passHide = true;
        this.cities = [
            { value: 'Tel-Aviv-0', viewValue: 'Tel Aviv' }, { value: 'Jerusalem-1', viewValue: 'Jerusalem' },
            { value: 'Haifa-2', viewValue: 'Haifa' }, { value: 'Beer Sheva-3', viewValue: 'Beer Sheva' },
            { value: 'Natenya-4', viewValue: 'Netanya' }, { value: 'Rishon-Le-Zion-5', viewValue: 'Rishon Le Zion' },
            { value: 'Rehovot-6', viewValue: 'Rehovot' }, { value: 'Eilat-7', viewValue: 'Eilat' },
            { value: 'Kfar-Saba-8', viewValue: 'Kfar Saba' }, { value: 'Kiryat-Shmona-9', viewValue: 'Kiryat Shmona' },
        ];
    }
    ngOnInit() {
        // Disable route access if already loggedIn
        if (this.authService.isUserLoggedIn()) {
            this.router.navigate(['dashboard']);
        }
        // Load FormBuilder
        this.firstFormGroup = this.formBuilder.group({
            identityNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.secondFormGroup = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]*$')
                ])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]*$')
                ])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFirstStepSubmit(stepper) {
        const signUpDetails = this.firstFormGroup.getRawValue();
        const identityNumber = signUpDetails.identityNumber.toString();
        const credentials = {
            identityNumber: identityNumber,
            email: signUpDetails.email,
            password: signUpDetails.password,
            password2: signUpDetails.password2
        };
        this.authService.checkUserCredentials(credentials).subscribe(data => {
            if (data.userChecked) {
                this.formIsValid = true;
                this.goForward(stepper);
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.firstFormGroup.get(prop);
                    if (formControl) {
                        // activate the error messages
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.formIsValid = false;
            }
        });
    }
    onSecondStepSubmit() {
        const credentials = this.firstFormGroup.getRawValue();
        const identityNumber = credentials.identityNumber.toString();
        const shippingDetails = this.secondFormGroup.getRawValue();
        const user = {
            email: credentials.email,
            identityNumber: identityNumber,
            password: credentials.password,
            lastName: shippingDetails.lastName,
            firstName: shippingDetails.firstName,
            city: shippingDetails.city,
            street: shippingDetails.street
        };
        this.authService.registerUser(user).subscribe(user => {
            // Login and Redirect to Dashboard after a successful register
            if (user) {
                const loginDetails = { email: credentials.email, password: credentials.password };
                this.redirectToDashboard(loginDetails);
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.secondFormGroup.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.userIsRegistered = false;
            }
        });
    }
    redirectToDashboard(loginDetails) {
        this.authService.loginUser(loginDetails).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.authService.loadUserPayload();
                this.router.navigate(['dashboard']);
            }
        });
    }
    // Change to Promise
    goForward(stepper) {
        setTimeout(() => {
            if (this.formIsValid) {
                stepper.next();
            }
        }, 1500);
    }
    allowNumbersOnly(e) {
        const code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
};
SignupStepperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupStepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-stepper',
        template: __webpack_require__(/*! raw-loader!./signup-stepper.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup-stepper/signup-stepper.component.html"),
        styles: [__webpack_require__(/*! ./signup-stepper.component.scss */ "./src/app/components/signup-stepper/signup-stepper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignupStepperComponent);



/***/ }),

/***/ "./src/app/gurds/admin.gurd.ts":
/*!*************************************!*\
  !*** ./src/app/gurds/admin.gurd.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AdminGuard = class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        this.authService.loadToken();
        this.userToken = this.authService.currentUserToken;
        let tokenInfo = this.authService.getDecodedAccessToken(this.userToken);
        if (this.authService.isUserLoggedIn() && tokenInfo.isAdmin === true) {
            return true;
        }
        else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AdminGuard);



/***/ }),

/***/ "./src/app/gurds/auth.gurd.ts":
/*!************************************!*\
  !*** ./src/app/gurds/auth.gurd.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isUserLoggedIn = () => {
            let jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            if (localStorage.id_token == undefined)
                return false;
            return !jwtHelper.isTokenExpired(localStorage.id_token);
        };
        this.storeCartData = (currentUserCart) => {
            localStorage.setItem('cart', JSON.stringify(currentUserCart));
        };
        this.getDecodedAccessToken = (token) => {
            try {
                return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            }
            catch (Error) {
                return null;
            }
        };
    }
    checkUserCredentials(userCredentials) {
        return this.http.post('http://localhost:4000/api/user/registerCheck', userCredentials, httpOptions);
    }
    registerUser(user) {
        return this.http.post('http://localhost:4000/api/user/register', user, httpOptions);
    }
    loginUser(loginDetails) {
        return this.http.post('http://localhost:4000/api/user/login', loginDetails, httpOptions);
    }
    storeUserData(token, loggedUser) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        this.authToken = token;
        this.loggedUser = loggedUser;
    }
    loadUserPayload() {
        this.currentUserData = JSON.parse(localStorage.getItem('user'));
    }
    loadToken() {
        this.currentUserToken = localStorage.getItem('id_token');
    }
    logoutUser() {
        this.authToken = null;
        this.loggedUser = null;
        localStorage.clear();
    }
    loadUserCart() {
        this.userCart = JSON.parse(localStorage.getItem('cart'));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let CartService = class CartService {
    constructor(http) {
        this.http = http;
    }
    createNewCart(userId, token) {
        return this.http.post(`http://localhost:4000/api/cart/createCart`, userId, { headers: { Authorization: token } });
    }
    getUserCartStatus(userId, token) {
        return this.http.get(`http://localhost:4000/api/cart/getUserCartStatus/${userId}`, { headers: { Authorization: token } });
    }
    updateCartStatus(cartId, cartStatus, token) {
        return this.http.put(`http://localhost:4000/api/cart/updateCartStatus/${cartId}`, cartStatus, { headers: { Authorization: token } });
    }
    addProductToCart(cartId, product, token) {
        return this.http.put(`http://localhost:4000/api/cart/addProductToCart/${cartId}`, product, { headers: { Authorization: token } });
    }
    deleteProductFromCart(cartId, productId, token) {
        return this.http.put(`http://localhost:4000/api/cart/deleteProductFromCart/${cartId}`, productId, { headers: { Authorization: token } });
    }
    deleteAllProductsFromCart(cartId, token) {
        return this.http.put(`http://localhost:4000/api/cart/deleteAllProducts/${cartId}`, {}, { headers: { Authorization: token } });
    }
    setCartTotalPrice(cartId, totalCartPrice, token) {
        return this.http.put(`http://localhost:4000/api/cart/setCartTotalPrice/${cartId}`, totalCartPrice, { headers: { Authorization: token } });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CartService);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getAllCategories() {
        return this.http.get('http://localhost:4000/api/category/categories');
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    getAllOrders(token) {
        return this.http.get('http://localhost:4000/api/order/orders', { headers: { Authorization: token } });
    }
    getOrdersLength() {
        return this.http.get('http://localhost:4000/api/order/ordersLength');
    }
    createNewOrder(order, token) {
        return this.http.post('http://localhost:4000/api/order/createNewOrder', order, { headers: { Authorization: token } });
    }
    getFullyBookedDates(token) {
        return this.http.get('http://localhost:4000/api/order/getFullyBookedDates', { headers: { Authorization: token } });
    }
    checkIfUserHasOrder(userId, token) {
        return this.http.get(`http://localhost:4000/api/order/getLatestOrderByUserId/${userId}`, { headers: { Authorization: token } });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrderService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        return this.http.get('http://localhost:4000/api/product/products');
    }
    getProductsByCategoryId(categoryId) {
        return this.http.get(`http://localhost:4000/api/product/productsByCategory/${categoryId}`);
    }
    searchProducts(name) {
        return this.http.get(`http://localhost:4000/api/product/search?name=${name}`);
    }
    editProduct(productId, editedProduct, token) {
        return this.http.put(`http://localhost:4000/api/product/editProductById/${productId}`, editedProduct, { headers: { Authorization: token } });
    }
    createNewProduct(newProduct, token) {
        return this.http.post('http://localhost:4000/api/product/createNewProduct', newProduct, { headers: { Authorization: token } });
    }
    getCheapProductsLength() {
        return this.http.get('http://localhost:4000/api/product/getCheapProducts');
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/orencohen/Repos/shopping-experience/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map