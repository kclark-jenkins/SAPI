'use strict';

// Global namespace
var SAPI                 = SAPI                 || {};
    SAPI.DEBUG           = SAPI.DEBUG           || {};
    SAPI.BIRT            = SAPI.BIRT            || {};
    SAPI.BIRT.EXCEPTIONS = SAPI.BIRT.EXCEPTIONS || {};
    SAPI.BIRT.ELEMENTS   = SAPI.BIRT.ELEMENTS   || {};
    SAPI.BIRT.DATA       = SAPI.BIRT.DATA       || {};

SAPI = {
    getBaseDocumentationURL: function() {
        return 'https://github.com/kclark-jenkins/SAPI/';
    }
};

SAPI.DEBUG = {
    implement: function(methodName, parameters) {
        SAPI.DEBUG.debug('Implement ' + methodName + '(' + parameters + '' + ')');
    },
    debug: function(message) {
        console.log('DEBUG: '   + message);
    },
    info: function(message) {
        console.log('INFO: '    + info);
    },
    warning: function(message) {
        console.log('WARNING: ' + warning);
    },
    error: function(message) {
        console.log('ERROR: '   + error);
    },
    fatal: function(message) {
        console.log('FATAL: '   + message);
    }
};

SAPI.BIRT = {
    initNewReport: function() {
        SAPI.DEBUG.implement('initReport', '');
    },
    saveReport: function(qualifiedReportName, overwrite) {
        SAPI.DEBUG.implement('saveReport', qualifiedReportName + ', ' + overwrite);
    }
};

SAPI.BIRT.EXCEPTIONS = {
    BirtElementNotDefined: function(element) {
        this.message = element + ' is not defined or does not exist.  More at ' + SAPI.BIRT.EXCEPTIONS.getBirtElementNotFoundDocumentation('wiki/BirtElementNotFound');
    },
    getBirtElementNotFoundDocumentation: function(exception) {
        return SAPI.getBaseDocumentationURL() + exception;
    }
};

SAPI.BIRT.ELEMENTS = {
    setElementProperties: function(element, properties, root) {
        switch(element) {
            case 'BirtData':
                root.dataProperties  = properties.birtDataProperties;
                break;
            case 'BirtLabel':
                root.labelProperties = properties.birtLabelProperties;
                break;
            case 'BirtText':
                root.textProperties  = properties.birtTextProperties;
                break;
            case 'BirtChart':
                root.chartProperties = properties.birtChartProperties;
                break;
            case 'BirtTable':
                root.tableProperties = properties.birtTableProperties;
                break;
            case 'BirtGrid':
                root.gridProperties  = properties.birtGridProperties;
                break;
            default:
                throw new SAPI.BIRT.EXCEPTIONS.BirtElementNotDefined(element);
        }
    }
};

SAPI.BIRT.DATA = {
    listDataModels: function(qualifiedPath) {
        SAPI.DEBUG.implement('listDataModels', qualifiedPath);
    },
    getDataModel: function(qualifiedPath) {
        SAPI.DEBUG.implement('getDataModel', qualifiedPath);
    },
    getDataModelMetaData: function(qualifiedPath) {
        SAPI.DEBUG.implement('getDataModelMetaData', qualifiedPath);
    }
};

// Class constructors
var Birt      = function() {};
var BirtData  = function(dataProperties)  {this.dataProperties  = dataProperties.birtDataProperties;};
var BirtLabel = function(labelProperties) {this.labelProperties = labelProperties.birtLabelProperties};
var BirtText  = function(textProperties)  {this.textProperties  = textProperties.birtTextProperties};
var BirtChart = function(chartProperties) {this.chartProperties = chartProperties.birtChartProperties};
var BirtTable = function(tableProperties) {this.tableProperties = tableProperties.birtTableProperties};
var BirtGrid  = function(gridProperties)  {this.gridProperties  = gridProperties.birtGridProperties};

// Birt item classes
var BirtItemProperties  = function(birtItemProperties) {this.birtItemProperties = birtItemProperties;};
/**
 * Properties class for BirtData
 *
 * @class BirtDataProperties
 * @constructor
 */
var BirtDataProperties  = function(birtDataProperties)  {this.birtDataProperties  = birtDataProperties;};
/**
 * Properties class for BirtLabel
 *
 * @class BirtLabelProperties
 * @constructor
 */
var BirtLabelProperties = function(birtLabelProperties) {this.birtLabelProperties = birtLabelProperties;};
/**
 * Properties class for BirtText
 *
 * @class BirtTextProperties
 * @constructor
 */
var BirtTextProperties  = function(birtTextProperties)  {this.birtTextProperties  = birtTextProperties;};
/**
 * Properties class for BirtChart
 *
 * @class BirtChartProperties
 * @constructor
 */
var BirtChartProperties = function(birtChartProperties) {this.birtChartProperties = birtChartProperties;};
/**
 * Properties class for BirtTable
 *
 * @class BirtTableProperties
 * @constructor
 */
var BirtTableProperties = function(birtTableProperties) {this.birtTableProperties = birtTableProperties;};
/**
 * Properties class for BirtGrid
 *
 * @class BirtGridProperties
 * @constructor
 */
var BirtGridProperties  = function(birtGridProperties)  {this.birtGridProperties  = birtGridProperties;};

// Getters
BirtData.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringify(this.dataProperties));};
BirtLabel.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringify(this.labelProperties));};
BirtText.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringify(this.textProperties));};
BirtChart.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringify(this.chartProperties));};
BirtTable.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringigy(this.tableProperties));};
BirtGrid.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringigy(this.gridProperties));};
BirtItemProperties.prototype.getProperties = function(){SAPI.DEBUG.debug(JSON.stringify(this.birtItemProperties));};

// Setters
/**
 * Properties setter for BirtData object
 *
 * @method setProperties
 * @param {Object} dataProperties Argument 1
 * @return {null} nothing
 */
BirtData.prototype.setProperties  = function(dataProperties){SAPI.BIRT.ELEMENTS.setElemeProperties('BirtData',     dataProperties, this);};
/**
 * Properties setter for BirtLabel object
 *
 * @method setProperties
 * @param {Object} labelProperties Argument 1
 * @return {null} nothing
 */
BirtLabel.prototype.setProperties = function(labelProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtLabel', labelProperties, this);};
/**
 * Properties setter for BirtText object
 *
 * @method setProperties
 * @param {Object} textProperties Argument 1
 * @return {null} nothing
 */
BirtText.prototype.setProperties  = function(textProperties) {SAPI.BIRT.ELEMENTS.setElementProperties('BirtText',  textProperties,  this);};
/**
 * Properties setter for BirtChart object
 *
 * @method setProperties
 * @param {Object} chartProperties Argument 1
 * @return {null} nothing
 */
BirtChart.prototype.setProperties = function(chartProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtChart', chartProperties, this);};
/**
 * Properties setter for BirtTable object
 *
 * @method setProperties
 * @param {Object} tableProperties Argument 1
 * @return {null} nothing
 */
BirtTable.prototype.setProperties = function(tableProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtTable', tableProperties, this);};
/**
 * Properties setter for BirtGrid object
 *
 * @method setProperties
 * @param {Object} gridProperties Argument 1
 * @return {null} nothing
 */
BirtGrid.prototype.setProperties  = function(gridProperties) {SAPI.BIRT.ELEMENTS.setElementProperties('BirtGrid',  gridProperties,  this);};

// Birt Methods
Birt.prototype.initNewReport               = function(){SAPI.BIRT.initNewReport();};
Birt.prototype.saveReport                  = function(qualifiedReportName, overwrite){SAPI.BIRT.saveReport(qualifiedReportName, overwrite)};

// BirtData Methods
BirtData.prototype.listDataModels          = function(qulifiedPath) {};
