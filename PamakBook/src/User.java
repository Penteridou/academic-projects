import java.util.ArrayList;
import java.util.HashSet;

public class User {
	
	private String name;
	private String email;
	private ArrayList<User> friends = new ArrayList<>();
	private ArrayList<Group> groups = new ArrayList<>();
	private ArrayList<Post> posts = new ArrayList<>();
	private Post lastPost ;
	
	public static ArrayList<User> allUsers= new ArrayList<>();
	
	public User(String name, String email) {  //OKKKKKKK
	
		this.name = name;
		this.email = email;
		
		allUsers.add(this);
	
		
	}
	
	
	public boolean isMemberOf(Group aGroup){
		
		if (this.friends != null){
			
			for(Group g: groups){
				
				if (g==aGroup)
					return true;
					
			}			
		}		
		return false;
		
	}


	public ArrayList<Group> getGroups() {
		return groups;
	}


	public ArrayList<Post> getPosts() {
		return posts;
	}
	
	


	public String getName() {
		return name;
	}
	
	
	public Post getLastPost() {
		return lastPost;
	}
	
	


	public ArrayList<User> getFriends() {
		return friends;
	}


	public void setLastPost(Post lastPost) {
		this.lastPost = lastPost;
	}

	
	public void addFriend(User u){  //OKKKKKKK
		
		if(!this.getFriends().contains(u)){
			friends.add(u);
			u.getFriends().add(this);
			System.out.println(this.getName()+ " kai "+u.getName()+ " eginan filoi ");
			}
		else 
			{System.out.println("Oi "+this.getName()+" kai "+u.getName()+ " einai hdh filoi! ");}
		
	}
	
	
	public void addGroup(Group g){
		
		groups.add(g);
		g.getEnrolledUsers().add(this);
		
	}
	
	
	
	//methodos ypologismou gia thn epilogh toy prwtou krithriou

	public ArrayList<String> suggestedFriendsTriangle(){
		HashSet<User> suggFr = new HashSet<>();

		for(User myFriend: friends){
			
			boolean flag = false;
			
			for(User myFriendsFriend: myFriend.getFriends()){
				if (friends.contains(myFriendsFriend))
					flag=true;
				
			}	
			
			if (flag==true){
				for (User f: myFriend.getFriends()){
					if (!friends.contains(f)&& !this.equals(f))
						suggFr.add(f);
				
				}	
			}
			
		}
		
		ArrayList<String> SuggestedFriendsNames = new ArrayList<String>();


		for(User u: suggFr)
			SuggestedFriendsNames.add(u.getName());
			
		
		return SuggestedFriendsNames;
		
	}
	
	
	
	
	//poluploki methodos ypologismou listas suggested friends analoga me tin epilogi kritiriou
	public void suggestedFriends(int x){
		
		
		
		if (x==1){
			
			System.out.println("Me vasi to prwto krithrio ");
			//ektipwsi
			if(this.suggestedFriendsTriangle()!=null){
				System.out.println("oi proteinomenoi filoi gia ton "+this.getName() +" einai:");
				System.out.println(this.suggestedFriendsTriangle());
			}else 
				System.out.println("No friends to suggest!");
			
			
		}else if(x==2){
			System.out.println("Me vasi to deytero krithrio ");
			HashSet<String> suggFr = new HashSet <String>();
			
			for(Group g: groups){
				
				for(String name: g.CalcSuggestFriendsGroup(this)){
					suggFr.add(name);
				}
				
			
			//ektipwsi
			if(suggFr!=null){
				System.out.println("oi proteinomenoi filoi gia ton " +this.getName() +" einai:");
				System.out.println(suggFr);
				}else 
					System.out.println("No friends to suggest!");
				
				
			}
			
		
		}else {					//x==3
			
			System.out.println("Me vasi to trito krithrio ");
			
			HashSet<String> suggFr = new HashSet <String>();
			
			for(Post p: posts){
			
				for(String name: p.SuggestFriendsPost(this))
					suggFr.add(name);
	
			} 


			//ektipwsi
			if(suggFr!=null){
				System.out.println("oi proteinomenoi filoi gia ton "+this.getName() +" einai:");
				System.out.println(suggFr);
				}else 
					System.out.println("No friends to suggest!");
	
		}
		
		
		
	}
	
	
	
	
}
