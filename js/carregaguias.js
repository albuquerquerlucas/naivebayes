/**
 * Created by Lucas on 01/06/2017.
 */

/*jQuery(document).ready(function(){
    var sidebar = jQuery('#sidebar');
    var content = jQuery('#content');
    var other = jQuery('#other');

    request( 'home.html' );

    function m_load( data )
    {
        var text = jQuery( '<div>'+data+'</div>' );//forçando o parser

        sidebar.html( text.find('#sidebar').html() );
        content.html( text.find('#content').html() );
        other.html( text.find('#other').html() );

        jQuery(document).attr( 'title', text.find('title').html() );
    }
    function request( file )
    {
        jQuery.ajax({
            url: file,
            success: function( data )
            {
                m_load( data );
            }
        });
    }
    jQuery('#menu a').click(function( e ){
        e.preventDefault();
        request( jQuery( this ).attr('href') );
    });
});*/