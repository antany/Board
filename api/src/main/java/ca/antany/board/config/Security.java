package ca.antany.board.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

import ca.antany.board.config.filters.AuthenticationFilter;
import ca.antany.board.config.filters.AuthorizationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class Security extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		/*http.csrf().disable().authorizeRequests().antMatchers("/", "/**").permitAll().and().headers().frameOptions()
		.disable();*/
		
		http.authorizeRequests()
				
				.antMatchers("/api/auth", "/api/auth/**").permitAll()
				.antMatchers("/ui/auth", "/ui/auth/**").permitAll()
				.antMatchers("/", "/**").authenticated().and()
				.addFilter(new AuthenticationFilter(authenticationManager()))
				.addFilter(new AuthorizationFilter(authenticationManager())).sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web
        .ignoring()
        .antMatchers("/h2-console/**")
        .antMatchers("/static/**")
        .antMatchers("/favicon.ico","/manifest.json");
	}
}
