/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * @externs
 *
 * Re-opens typedefs to add properties to functions.
 *
 * <p>This is a separate file so that we can check the Angular externs against
 * new-type-inference (NTI), which currently does not support
 * properties-on-functions.
 */


/******************************************************************************
 *  $filter Properties
 *****************************************************************************/

/**
 * The 'orderBy' filter is available through $filterProvider and AngularJS
 * injection; but is not accessed through a documented public API of AngularJS.
 * <p>In current AngularJS version the injection is satisfied by
 * angular.orderByFunction, where the implementation is found.
 * <p>See http://docs.angularjs.org/api/ng.filter:orderBy.
 * @typedef {function(Array,
 *     (string|function(?):*|Array<(string|function(?):*)>),
 *     boolean=): Array}
 */
angular.$filter.orderBy;

/**
 * @typedef {function(Array,
 *     (string|Object|function(?):*),
 *     (function(?):*|boolean)=): Array}
 */
angular.$filter.filter;



/******************************************************************************
 *  $interval Properties
 *****************************************************************************/

/**
 * Augment the angular.$interval type definition by reopening the type via an
 * artificial angular.$interval instance.
 *
 * This allows us to define methods on function objects which is something
 * that can't be expressed via typical type annotations.
 *
 * @type {angular.$interval}
 */
angular.$interval_;

/**
 * @type {function(!angular.$q.Promise):boolean}
 */
angular.$interval_.cancel = function(promise) {};


/******************************************************************************
 *  $parse Properties
 *****************************************************************************/

/**
 * Augment the angular.parse.Expression type definition by reopening the type
 * via an artificial angular.$parse instance.
 *
 * This allows us to define methods on function objects which is something
 * that can't be expressed via typical type annotations.
 *
 * @type {angular.parse.Expression}
 */
angular.$parse_;

/**
 * @type {function((!angular.Scope|!Object), *)}
 */
angular.$parse_.assign = function(scope, newValue) {};


/******************************************************************************
 *  $timeout Properties
 *****************************************************************************/

/**
 * Augment the angular.$timeout type definition by reopening the type via an
 * artificial angular.$timeout instance.
 *
 * This allows us to define methods on function objects which is something
 * that can't be expressed via typical type annotations.
 *
 * @type {angular.$timeout}
 */
angular.$timeout_;

/**
 * @type {function(angular.$q.Promise=):boolean}
 */
angular.$timeout_.cancel = function(promise) {};
