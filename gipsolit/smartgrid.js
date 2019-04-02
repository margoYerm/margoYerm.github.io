const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1290px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "960.px",
            fields: "20px"
        },
        sm: {
            width: "780px",
            fields: "10px"
        },
        xs: {
            width: "560px",
            fields: "5px"
        },
        xxs: {
            width: "320px",
            fields: "5px"
        }
    },
    oldSizeStyle: false    
};

smartgrid('./src/precss', settings);