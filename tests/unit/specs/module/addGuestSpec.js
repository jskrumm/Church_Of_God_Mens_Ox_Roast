define(['lodash', 'module/addGuest'], function (_, module) {
	"use strict";

	var fakejQueryTextInput = $('<input id="guest_firstname" type="text" name="guest_firstname" placeholder="First Name" class="valid">'),
		fakeJQueryRaidoInput = $('<input type="radio" id="oneDayGuestPass" name="eventGuestPass" value="1" data-price="35">'),
		allPassTypes = [
			{"name": "2 Day Pass", "type": "2"},
			{"name": "1 Day Pass", "type": "1"},
			{"name": "12 and under", "type": "0"},
			{"name": "Golfing", "type": "G"},
			{"name": "Fishing", "type": "F"},
			{"name": "Paintball", "type": "P"}
		];

	describe('Add Guest Module', function() {
		it('is defined', function() {
			expect(module).toBeDefined();
		});

		it('it returns an object', function() {
			expect(module).toEqual(jasmine.any(Object));
		});

		describe('has a function called', function() {
			describe('bindEvents', function() {
				it('that is defined', function() {
					expect(module.bindEvents).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						module.bindEvents({"scope": "#fakeScope"});
					});

					it('uses jQuey on to bind events', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('uses jQuey on to bind a click event to a button with a class of "add-guest" that calls a fuction called foo', function() {
						expect($.fn.on).toHaveBeenCalledWith("click", "button.add-guest", module.foo);
					});
				});
			});

			describe('foo', function() {
				it('that is defined', function() {
					expect(module.foo).toBeDefined();
				});

				describe('that when called', function() {
					
				});
			});

			describe('bar', function() {
				it('that is defined', function() {
					expect(module.bar).toBeDefined();
				});

				describe('that when called', function() {
					describe('gets the value of the element', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							module.bar(fakejQueryTextInput);
						});

						it('using jQuey val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});
					});

					describe('tries to see if the value is a valid pass type', function() {
						beforeEach(function() {
							spyOn(_, "find")
							module.bar(fakeJQueryRaidoInput);
						});

						it('using lodash find function', function() {
							expect(_.find).toHaveBeenCalled();
						});

						it('using lodash find function with an array of pass type objects, the property in the array of objects to find, and the value of that property to find', function() {
							expect(_.find).toHaveBeenCalledWith(allPassTypes, "type", $(fakeJQueryRaidoInput).val());
						});
					});

					describe('validates that the pass name returned from the array of pass types is not empty', function() {
						
					});
				});
			});
		});
	});
});