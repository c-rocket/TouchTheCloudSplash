/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    function fetchData(url) {
        return $.getJSON(url);
    }

    function fetchEngagement(url) {
        return $.getJSON(url);
    }
    return {
        fetchData: fetchData
    };
});