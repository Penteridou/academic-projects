import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		System.out.println("(User pressed the button Suggested Friends and has to choose criteria)");
		System.out.println("Select criteria for the friendship list preperation");
		System.out.println("For option A press 1");
		System.out.println("For option B press 2");
		System.out.println("For option C press 3");
		
		
		
		
		User U1 = new User("Daniel" , "da@uom.gr");
		
		User U2 = new User("Chris" , "ch@uom.gr");

		User U3 = new User("John" , "jo@uom.gr");

		User U4 = new User("David" , "dav@uom.gr");

		User U5 = new User("Thomas" , "th@uom.gr");

		User U6 = new User("Mary" , "ma@uom.gr");
		
		User U7 = new User("Nicole" , "ni@uom.gr");

		User U8 = new User("Sofia" , "so@uom.gr");
		
		User U9 = new User("Scott" , "sc@uom.gr");

		User U10 = new User("Lory" , "lo@uom.gr");
		
		
		Group G1 = new Group ("UOM group", "UOM courses and news oly here");
		Group G2 = new Group ("Thessaloniki", " The most beautiful city of Greece! Guides and info ");
		Group G3 = new ClosedGroup ("Dod lovers", " Dogs' breeds and useful advice ");
		
	
		Post P1 = new Post ("170817","Hello World", U1);
		Post P2 = new Post ("170817","Good Mornig", U2);
		Post P3 = new Post ("170817","Have a nice day", U3);
		Post P4 = new Post ("050816","Gute nacht", U5);
		
	
		
		U1.addGroup(G3);
		U3.addGroup(G3);
		U5.addGroup(G3);
		U8.addGroup(G3);


		U1.addFriend(U8);
		
		U1.addFriend(U7);
				
		U8.addFriend(U6);
		
		U8.addFriend(U7);
		
		U8.addFriend(U5);
		
		
		
		Scanner answer = new Scanner(System.in);  
		System.out.println("Insert the number: ");
		int an = answer.nextInt(); 
		answer.close(); 
		
		//function call for the user U1
		U1.suggestedFriends(an);
		
		
		
		

	}

}
