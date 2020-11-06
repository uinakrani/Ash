// Default

$('.default').click(function() {
   Snackbar.show({text: 'Example notification text.', duration: 100000});
});

// Position

$('.top-left').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-left'
    });
});

$('.top-center').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-center'
    });
});

$('.top-right').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-right'
    });
});

$('.bottom-left').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-left'
    });
});

$('.bottom-center').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-center'
    });
});

$('.bottom-right').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-right'
    });
});


// Action Button

$('.no-action').click(function() {
    Snackbar.show({
        showAction: false
    });
});

// Action Text

$('.action-text').click(function() {
    Snackbar.show({
        actionText: 'Thanks!'
    });
});

// Text Color

$('.text-color').click(function() {
    Snackbar.show({
        actionTextColor: '#e2a03f',
    });
});

// Click Callback
$('.click-callback').click(function() {
    Snackbar.show({
        text: 'Custom callback when action button is clicked.',
        width: 'auto',
        onActionClick: function(element) {
            //Set opacity of element to 0 to close Snackbar 
            $(element).css('opacity', 0);
            Snackbar.show({
                text: 'Thanks for clicking the  <strong>Dismiss</strong>  button!',
                showActionButton: false
            });
        }
    });
});

// Duration

$('.duration').click(function() {
    Snackbar.show({
        text: 'Duration set to 5s',
        duration: 5000,
    });
});

// Custom Background

$('.snackbar-bg-primary').click(function() {
    Snackbar.show({
        text: 'Primary',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(-45deg, #8d4ffe 0%, #3f00fe 100%)'
    });
});

$('.snackbar-bg-info').click(function() {
    Snackbar.show({
        text: 'Info',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(270deg, #1fbdd6 0%, #017c82 100%)'
    });
});

$('.snackbar-bg-success').click(function() {
    Snackbar.show({
        text: 'Success',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(270deg, #79b912 0%, #3c5f07 100%)'
    });
});

$('.snackbar-bg-warning').click(function() {
    Snackbar.show({
        text: 'Warning',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(270deg, #e28501 0%, #9a5c04 100%)'
    });
});

$('.snackbar-bg-danger').click(function() {
    Snackbar.show({
        text: 'Danger',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(270deg, #e41616 0%, #801010 100%)'
    });
});

$('.snackbar-bg-dark').click(function() {
    Snackbar.show({
        text: 'Dark',
        actionTextColor: '#fff',
        backgroundColor: 'linear-gradient(270deg, #2c076f 0%, #0d0721 100%)'
    });
});