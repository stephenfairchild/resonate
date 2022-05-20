/**
 * Retrieves a list of files for a specified app
 * @param {string} app - The title of the app
 * @param Object cloudinary - The Cloudinary instance
 * @param Object params - A list of parameters to filter the results
 */
module.exports = async (app, cloudinary, params) => {
    const results = await new Promise((resolve) => {
        cloudinary.v2.search.expression(`folder:${app}/*`)
            .sort_by('public_id','desc')
            .max_results(100).execute().then((result) => {
                resolve(result)
            });
    })

    return results.resources.filter(result => {
        if (params.identity) {
            if (result.filename !== params.identity) {
                return false;
            }
        }

        return true;
    })
}
