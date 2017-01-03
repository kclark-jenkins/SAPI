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
/**
 * Class used for created BIRT items to be used in a report
 *
 * @class Birt
 * @constructor
 */
var Birt      = function() {};
/**
 * Class used to create a BIRT Data Object connection definition
 * @param dataProperties
 * @constructor
 */
var BirtData  = function(dataProperties)  {this.dataProperties  = dataProperties.birtDataProperties;};
/**
 * Class used to create a label to be used in a report
 *
 * @param labelProperties
 * @constructor
 */
var BirtLabel = function(labelProperties) {this.labelProperties = labelProperties.birtLabelProperties};
/**
 * Class used to create a text item to be used in a report
 * @param textProperties
 * @constructor
 */
var BirtText  = function(textProperties)  {this.textProperties  = textProperties.birtTextProperties};
/**
 * Class used to create a chart item to be used in a report
 *
 * @param chartProperties
 * @constructor
 */
var BirtChart = function(chartProperties) {this.chartProperties = chartProperties.birtChartProperties};
/**
 * Class used to create a table to be used in a report
 *
 * @param tableProperties
 * @constructor
 */
var BirtTable = function(tableProperties) {this.tableProperties = tableProperties.birtTableProperties};

/**
 * Class ussed to create a grid to be used in a report
 *
 * @param gridProperties
 * @constructor
 */
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
/**
 * Properties for BirtData
 *
 * @method getProperties
 * @for BirtData
 *
 * @return {BirtDataProperties} dataProperties
 */
BirtData.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringify(this.dataProperties));};
/**
 * Properties for BirtLabel
 *
 * @method getProperties
 * @for BirtLabel
 *
 * @ return {BirtLabelProperties} labelProperties
 */
BirtLabel.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringify(this.labelProperties));};
/**
 * Properties for BirtText
 *
 * @method getProperties
 * @for BirtText
 *
 * @return {BirtTextProperties} textProperties
 */
BirtText.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringify(this.textProperties));};
/**
 * Properties for BirtChart
 *
 * @method getProperties
 * @for BirtChart
 *
 * @return {BirtChartProperties} chartProperties
 */
BirtChart.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringify(this.chartProperties));};
/**
 * Properties for BirtTable
 *
 * @method getProperties
 * @for BirtTable
 *
 * @return {BirtTableProperties} tableProperties
 */
BirtTable.prototype.getProperties          = function(){SAPI.DEBUG.debug(JSON.stringigy(this.tableProperties));};
/**
 * Properties for BirtGrid
 *
 * @method getProperties
 * @for BirtGrid
 *
 * @return {BirtGridProperties} gridProperties
 */
BirtGrid.prototype.getProperties           = function(){SAPI.DEBUG.debug(JSON.stringigy(this.gridProperties));};
/**
 * Generic BIRT item properties
 *
 * @method getProperties
 * @for BirtItemProperties
 *
 * @return {BirtItemProperties} birtItemProperties
 */
BirtItemProperties.prototype.getProperties = function(){SAPI.DEBUG.debug(JSON.stringify(this.birtItemProperties));};

// Setters
/**
 * Properties setter for BirtData object
 *
 * @method setProperties
 * @for BirtData
 * @param {BirtDataProperties} dataProperties Argument 1
 */
BirtData.prototype.setProperties  = function(dataProperties){SAPI.BIRT.ELEMENTS.setElemeProperties('BirtData',     dataProperties, this);};
/**
 * Properties setter for BirtLabel object
 *
 * @method setProperties
 * @for BirtLabel
 * @param {BirtLabelProperties} labelProperties Argument 1
 */
BirtLabel.prototype.setProperties = function(labelProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtLabel', labelProperties, this);};
/**
 * Properties setter for BirtText object
 *
 * @method setProperties
 * @for BirtText
 * @param {BirtTextProperties} textProperties Argument 1
 */
BirtText.prototype.setProperties  = function(textProperties) {SAPI.BIRT.ELEMENTS.setElementProperties('BirtText',  textProperties,  this);};
/**
 * Properties setter for BirtChart object
 *
 * @method setProperties
 * @for BirtChart
 * @param {BirtChartProperties} chartProperties Argument 1
 */
BirtChart.prototype.setProperties = function(chartProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtChart', chartProperties, this);};
/**
 * Properties setter for BirtTable object
 *
 * @method setProperties
 * @for BirtTable
 * @param {BirtTableProperties} tableProperties Argument 1
 */
BirtTable.prototype.setProperties = function(tableProperties){SAPI.BIRT.ELEMENTS.setElementProperties('BirtTable', tableProperties, this);};
/**
 * Properties setter for BirtGrid object
 *
 * @method setProperties
 * @for BirtGrid
 * @param {BirtGridProperties} gridProperties Argument 1
 */
BirtGrid.prototype.setProperties  = function(gridProperties) {SAPI.BIRT.ELEMENTS.setElementProperties('BirtGrid',  gridProperties,  this);};

// Birt Methods

/**
 * Creates a new empty report design
 *
 * @method initNewReport
 * @for Birt
 */
Birt.prototype.initNewReport               = function(){SAPI.BIRT.initNewReport();};
/**
 * Saves a report design in XML format to the defined iHub for report generation
 *
 * @method saveReport
 * @for Birt
 * @param qualifiedReportName
 * @param overwrite
 */
Birt.prototype.saveReport                  = function(qualifiedReportName, overwrite){SAPI.BIRT.saveReport(qualifiedReportName, overwrite)};

// BirtData Methods
/**
 * Retireves a list of available data objects at the given location
 *
 * @method listDataModels
 * @for BirtData
 * @param qulifiedPath
 * @return {Object} availableDataModels
 */
BirtData.prototype.listDataModels          = function(qulifiedPath) {};
