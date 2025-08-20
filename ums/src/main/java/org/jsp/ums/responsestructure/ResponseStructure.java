package org.jsp.ums.responsestructure;

public class ResponseStructure {
	private int status;
	private String message;
	private Object body;
	
	
	public ResponseStructure() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ResponseStructure(int status, String message, Object body) {
		super();
		this.status = status;
		this.message = message;
		this.body = body;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public Object getBody() {
		return body;
	}


	public void setBody(Object body) {
		this.body = body;
	}


	@Override
	public String toString() {
		return "ResponseStructure [status=" + status + ", message=" + message + ", body=" + body + ", getStatus()="
				+ getStatus() + ", getMessage()=" + getMessage() + ", getBody()=" + getBody() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
	
}
