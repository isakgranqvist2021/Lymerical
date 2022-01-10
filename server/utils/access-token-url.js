export const getAccessTokenUrl = () => {
	const redirect_uri = process.env.SERVER_ADDR + '/api/authorize';

	const url = [
		'https://api.instagram.com/oauth/authorize',
		'?client_id=' + process.env.INSTAGRAM_APP_ID,
		'&redirect_uri=' + redirect_uri,
		'&scope=user_profile,user_media',
		'&response_type=code',
	].join('');

	return url;
};
