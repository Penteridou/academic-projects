
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;

	public class ClosedGroup extends Group{
	
		public ClosedGroup(String name, String description) {
			super(name, description);
			
		}
	
		//override 
		//methodos ypologismou gia thn epilogh toy deyteroy krithriou

	public ArrayList<String> CalcSuggestFriendsGroup(User u){
			
HashSet<User> suggFr = new HashSet<>();
		
		
		for (User user: enrolledUsers){
			if (!user.equals(u) && !u.getFriends().contains(user))
				suggFr.add(user);
		}
	
			
		ArrayList<String> SuggestedFriendsNames = new ArrayList<String>();
		for(User us: suggFr)
			SuggestedFriendsNames.add(us.getName());
		
		Collections.sort(SuggestedFriendsNames);
		ArrayList<String> FirstTwoSuggestedFriendsNames = new ArrayList<>();
		FirstTwoSuggestedFriendsNames.add(SuggestedFriendsNames.get(0));
		FirstTwoSuggestedFriendsNames.add(SuggestedFriendsNames.get(1));

		
		return FirstTwoSuggestedFriendsNames;

	
		
		
		
		
	
	}

	
	
	
	
	
	
	
	
	
	
}
	
	
	
	
	
	

