$(document).ready(function() {
    try {
        //SAPI.BIRT.initNewReport();
        //SAPI.BIRT.saveReport('/Home/Administrator/test.rptdesign', false);
        var tester = new Birt();

        var label  = new BirtLabel(new BirtLabelProperties({
            'Text': 'SomeLabel',
            'Other': 'Some other property1'
        }));
        var text   = new BirtText(new BirtItemProperties({
            'Text': 'SomeText',
            'Other': 'Some other property2'
        }));
        var chart  = new BirtChart(new BirtItemProperties({
            'Chart': 'SomeChart',
            'Other': 'Some other property3'
        }));

        label.getProperties();

        label.setProperties(new BirtLabelProperties({
            'Text': 'New Text',
            'Other': 'New Other'
        }));

        label.getProperties();

        tester.initNewReport();
        tester.saveReport('/Home/Administrator/test.rptdesign', false);
        $('#status').append('Working');
    }catch(ex){
        console.log(ex);
    }
});
