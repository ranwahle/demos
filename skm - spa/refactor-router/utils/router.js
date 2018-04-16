(function() {
    'use strict';

    let routes = {};
    let view;
    let getState;

    function init(_routes, _getState) {
        routes = _routes;
        getState = _getState;

        view = document.querySelector('[data-view]');

        window.addEventListener('hashchange', onHashChange);
        window.addEventListener('DOMContentLoaded', onHashChange);
    }

    async function onHashChange(e) {
        let url = getUrl();

        let route = getRoute(url);
        console.log('route', route);

        if (!route) {
            document.location.hash = '/';
            return;
        }

        let paramsMap = getParamsMap(route, url);
        console.log('paramsMap', paramsMap);

        let results = [];

        if (route.resolve) {
            let resolvePromises = Object.keys(route.resolve).map(key => {
                return route.resolve[key](paramsMap, getState());
            });
            results = await Promise.all(resolvePromises);
        }
        if (route.title) {
            document.querySelector('title').innerHTML = route.title(...results);
        }

        view.innerHTML = route.render(...results);

        if (route.controller) {
            route.controller(...results);
        }
    }

    function getParamsMap(route, url) {
        let map = {};
        let values = url.split('/');
        route.url.split('/').forEach((part, i) => {
            if (!part.startsWith(':')) {
                return;
            }
            map[part.replace(':', '')] = values[i];
        });
        return map;
    }

    function getRoute(url) {
        let routeParts = url.split('/');
        return Object.keys(routes).map(key => routes[key]).find(route => {
            return isMatch(route.url.split('/'), routeParts);
        });

        function isMatch(defParts, curParts) {
            if (defParts[1] !== curParts[1]) {
                return false;
            }
            return defParts.slice(1).length === curParts.slice(1).length;
        }
    }

    function getUrl() {
        let url = Array.from(document.location.hash.replace('#', ''));
        if (url[url.length - 1] === '/' && url.length > 1) {
            url.pop()
        }
        return url.join('');
    }

    window.Router = {
        init
    };
}());