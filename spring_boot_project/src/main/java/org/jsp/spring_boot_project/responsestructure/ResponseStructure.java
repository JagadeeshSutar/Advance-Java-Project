package org.jsp.spring_boot_project.responsestructure;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseStructure {
	private int status;
	private String message;
	private Object body;
}
