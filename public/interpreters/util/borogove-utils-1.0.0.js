/**
 * Helper functions for interoperation between Borogove and the interpreters
 * 
 * @version 1.0.0
 */
window.borogove = (function() {
    const files = [];

    /**
     * Checks browser compatibility
     */
    function checkCompatibility() {
        try {
            localStorage.setItem( "borogove-compat-test", "1" );
            localStorage.removeItem( "borogove-compat-test" );
        }
        catch( e ) {
            const url = document.location.origin || document.location.hostname;
            document.body.innerHTML = `
                <div class="error">
                <p>
                    Browser settings are preventing the embedded interpreter from working correctly.
                </p>
                <p>
                    The most likely reason is the browser blocking third-party site data.
                    This setting can be found in Chrome in the settings: open settings
                    and type "third-party" in the search field and uncheck the
                    "Block third-party cookies and site data" checkbox.
                    You can also set an exception for ${url}.
                </p>
                </div>
            `;
        }
    }


    /**
     * Gets the story file from Borogove
     */
    async function fetchStoryfile( url ) {
        const response = await fetch( url );
        return await response.arrayBuffer();
    }


    /**
     * Gets a file's contents from Borogove filesystem as a data URL.
     * 
     * @param {string} path Path to the resource
     */
    function getFileContents( path ) {
        return files[ path ];
    }


    /**
     * Registers an event listener that receives the story file from Borogove.
     * The file is encoded in base64 and passed to the callback function.
     * 
     * @param {function} callback
     */
    function loader( callback ) {
        window.addEventListener( "message", event => {
            const data = event.data;

            if( !event.origin.startsWith( "http://localhost" ) && 
                !event.origin.startsWith( "https://borogove.app" ) &&
                !event.origin.startsWith( "https://snippets.borogove.app" ) &&
                !event.origin.startsWith( "https://assets.borogove.app" ) && 
                !event.origin.startsWith( "https://borogove-ide-dev.firebaseapp.com" ) &&
                !event.origin.startsWith( "https://borogove-assets-dev.firebaseapp.com" ) ) { 
                return;
            }

            if( data.action === "start" ) {
                callback( data.storydata );
            }

            if( data.action === "fileupload" ) {
                // const content = convertBinaryStringToUint8Array( data.content );
                files[ data.path ] = window.URL.createObjectURL( new Blob( [ data.content ] ) );
            }
        });
    }

    return {
        checkCompatibility,
        fetchStoryfile,
        getFileContents,
        loader
    };
})();