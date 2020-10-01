package ca.antany.board.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import ca.antany.board.config.filters.AuthenticationFilter;
import ca.antany.board.config.filters.AuthorizationFilter;
import ca.antany.board.service.UserDetailService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class Security extends WebSecurityConfigurerAdapter {
	
	@Autowired
	UserDetailService userDetailServer;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		/*http.csrf().disable().authorizeRequests().antMatchers("/", "/**").permitAll().and().headers().frameOptions()
		.disable();*/
		
		http.csrf().disable().authorizeRequests()
				.antMatchers("/api/auth", "/api/auth/**").permitAll()
				.antMatchers("/ui/auth", "/ui/auth/**").permitAll()
				.antMatchers("/static/**").permitAll()
				.antMatchers("/favicon.ico","/manifest.json").permitAll()  
				.antMatchers("/", "/**").authenticated().and()
				.formLogin()
	            .loginPage("/ui/auth")
	            .and()
				.addFilter(new AuthenticationFilter(authenticationManager()))
				.addFilter(new AuthorizationFilter(authenticationManager())).sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web
        .ignoring()
        .antMatchers("/h2-console/**");
        
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
		super.configure(auth);
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailServer);
		authProvider.setPasswordEncoder(new BCryptPasswordEncoder());
		return authProvider;
	}
	
}
