const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'sass',
    columns: 12,
    offset: '30px',
    mobileFirst: false,
    container: {
        maxWidth: '1170px',
        fields: '30px'
    },
    oldSizeStyle: false    
};

smartgrid('./app/sass', settings);