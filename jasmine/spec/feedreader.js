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
                expect(body.hasClass('menu-hidden')).toBe(true);
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
        // let myCont;
        beforeEach(done => {
            loadFeed(0, done);
        });

        it('should have at least one entry', done => {
            loadFeed(0, done);
            myCont = document.querySelectorAll('.entry');
            expect($('.feed .entry').length).not.toBe(0);
        });

    });
    
    describe('New Feed Selection', () => {

        let firstCall, secondCall;
        let x = 0;

        beforeEach(done => {
            loadFeed(x, done);
        });

        afterEach(() => {
            x++;
        });

        it('should return different content', done => {

            loadFeed(x, done);
            firstCall = document.querySelector('.entry').innerHTML;
            console.log(firstCall);
            expect(firstCall).not.toEqual(0);
            done();

        });
        
        it('call one should give value', done => {
            loadFeed(x, done);
            secondCall = document.querySelector('.entry').innerHTML;
            console.log(secondCall);
            expect(firstCall).not.toEqual(0);
            done();
        });

        it('Should return different feed from different sources', () => {
            expect(firstCall).not.toEqual(secondCall);
        });

    });

}());