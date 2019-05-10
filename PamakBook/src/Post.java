import java.util.ArrayList;
import java.util.HashSet;

public class Post {
	
	private String timestamp;
	private String text;
	private User owner;
	private static ArrayList<Post> allPosts = new ArrayList<>();
	
	public Post(String timestamp, String text, User owner) {
		
		this.timestamp = timestamp;
		this.text = text;
		this.owner = owner;
		owner.getPosts().add(this);
		owner.setLastPost(this);
		allPosts.add(this);
	}

	public String getTimestamp() {
		return timestamp;
	}

	public String getText() {
		return text;
	}

	public User getOwner() {
		return owner;
	}

	public static ArrayList<Post> getAllPosts() {
		return allPosts;
	}
	
	
	//methodos ypologismou gia thn epilogh toy tritoy krithriou

	public ArrayList<String> SuggestFriendsPost(User u){
		
		Post lastPost = u.getLastPost(); 
		HashSet<String> SuggestedFriendsN = new HashSet<String>();

		//psaxnw gia taytisi timeStamp
		for (Post post: allPosts){ 
			if(lastPost.getTimestamp().equals(post.getTimestamp()) && !lastPost.getOwner().equals(post.getOwner()))
				SuggestedFriendsN.add(post.getOwner().getName());
			
		}
		
		ArrayList<String> SuggestedFriendsNames = new ArrayList<String>(SuggestedFriendsN); 
		
		return SuggestedFriendsNames;
		
		
	}
	
	
	
	
	
}
