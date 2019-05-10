import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class Group {

	protected String name;
	protected String description;
	protected ArrayList<User> enrolledUsers = new ArrayList<>();

	public Group(String name, String description) {
		
		this.name = name;
		this.description = description;
	}
	
	
	public void addUser (User u){
		
		enrolledUsers.add(u);
		u.getGroups().add(this);

	}
	
	public ArrayList<User> getEnrolledUsers() {
		return enrolledUsers;
	}
	
	
	//methodos ypologismou gia thn epilogh toy deyterou krithriou
	public ArrayList<String> CalcSuggestFriendsGroup(User u){
		
		HashSet<User> suggFr = new HashSet<>();
		
		
		for (User user: enrolledUsers){
			if (!user.equals(u) && !u.getFriends().contains(user))
				suggFr.add(user);
		}
	
			
		ArrayList<String> SuggestedFriendsNames = new ArrayList<String>();
		for(User us: suggFr)
			SuggestedFriendsNames.add(us.getName());
		
		
		return SuggestedFriendsNames;

	}
		




}
	
	
	
	
	
	
	

