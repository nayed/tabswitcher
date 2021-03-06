import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        let tabItems = [
            {
                title: 'Tab 1',
                content: 'Some exciting content for tab 1'
            },
            {
                title: 'Tab 2',
                content: 'Some awesome content for tab 2'
            },
            {
                title: 'Tab 3',
                content: 'Some stupendous content for tab 3'
            },
        ];
        return tabItems;
    }
});
