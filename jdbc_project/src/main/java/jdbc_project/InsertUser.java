package jdbc_project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class InsertUser {
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver Class Loaded And Registered");
			
			Connection c = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbc_project","root","root");
			System.out.println("Connection Created");
			
			Statement s = c.createStatement();
			System.out.println("Statement created");
			
			s.execute("insert into user values(1,'Allen')");
			System.out.println("Done...");
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}
}
