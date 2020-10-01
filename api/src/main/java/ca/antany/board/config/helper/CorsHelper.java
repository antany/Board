package ca.antany.board.config.helper;

import javax.servlet.http.HttpServletResponse;

public class CorsHelper {

	protected static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
	protected static final String ACCESS_CONTROL_ALLOW_ORIGIN_VALUE = "*";
	protected static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
	protected static final String ACCESS_CONTROL_ALLOW_METHODS_VALUE = "GET,POST,DELETE,PUT,OPTIONS";
	protected static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
	protected static final String ACCESS_CONTROL_ALLOW_HEADERS_VALUE = "*";
	protected static final String ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials";
	protected static final String ACCESS_CONTROL_ALLOW_CREDENTIALS_VALUE = String.valueOf(true);
	
	public static void addCorsHeaders(HttpServletResponse response) {
		String profile = System.getProperty("spring.profiles.active");
		if(profile.equalsIgnoreCase("dev")){
			response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, ACCESS_CONTROL_ALLOW_ORIGIN_VALUE);
			response.setHeader(ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS_VALUE);
			response.setHeader(ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS_VALUE);
			response.setHeader(ACCESS_CONTROL_ALLOW_CREDENTIALS, ACCESS_CONTROL_ALLOW_CREDENTIALS_VALUE);
		}
	}
}
