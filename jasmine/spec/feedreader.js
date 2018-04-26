/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    describe('RSS Feeds', () => {

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should has a real URL', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        it('Should has a name too', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', () => {
        let body;

        beforeEach(() => {
            body = $('body');
            hamburger = $('.icon-list');
        });

        afterEach(() => {
            body = null;
            hamburger = null;
        });


        it('shoud be hidden by default', () => {
            document.onload = (() => {
                expect(body.hasClass('menu-hidden')).toBeTruthy();
            })();
        });

        it('should toggle visibility when icon is clicked', () => {
            hamburger.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            hamburger.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', () => {
        //     /* TODO: Write a test that ensures when the loadFeed
        //      * function is called and completes its work, there is at least
        //      * a single .entry element within the .feed container.
        //      * Remember, loadFeed() is asynchronous so this test will require
        //      * the use of Jasmine's beforeEach and asynchronous done() function.
        //      */

    });

    describe('New Feed Selection', () => {
        //     /* TODO: Write a test that ensures when a new feed is loaded
        //      * by the loadFeed function that the content actually changes.
        //      * Remember, loadFeed() is asynchronous.
        //      */

    });

}());