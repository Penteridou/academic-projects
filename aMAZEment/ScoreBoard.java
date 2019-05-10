import greenfoot.*;  // (World, Actor, GreenfootImage, and Greenfoot)


import java.util.Calendar;

/**
 * The ScoreBoard is used to display results on the screen. It can display some
 * text and several numbers.
 * 
 * @author M Kolling
 * @version 1.0
 */
public class ScoreBoard extends Actor
{
    public static final float FONT_SIZE = 48.0f;
    public static final int WIDTH = 400;
    public static final int HEIGHT = 300;
    
    /**
     * Create a score board for time out
     */
    public ScoreBoard(int score, String timeout)
    {
        makeImage("Time Out!", "Score: ", score);
    }

    /**
     * Create a score board for the final result.
     */
    public ScoreBoard(int score)
    {
        makeImage("Game Over", "Score: ", score);
    }
    //Create a score board for the last level win
    public ScoreBoard(int score, MyHero mh)
    {
        makeImage("Thanks for playing!",  score, mh);
    }
    
    public ScoreBoard(String msg){
       
         makeImage("rules" );
    
    }

     public ScoreBoard(String title, boolean ttl ){
       
         makeImage(title, true );
    
    }
 
    /**
     * Make the score board image.
     */
    private void makeImage(String title, String prefix, int score)
    {
        GreenfootImage image = new GreenfootImage(WIDTH, HEIGHT);

        image.setColor(new Color(255,255,255, 128));
        image.fillRect(10, 0, WIDTH, HEIGHT);
        image.setColor(new Color(0, 0, 0, 128));
        image.fillRect(5, 5, WIDTH-10, HEIGHT-10);
        Font font = image.getFont();
        font = font.deriveFont(FONT_SIZE);
        image.setFont(font);
        image.setColor(Color.WHITE);
        image.drawString(title, 60, 80);
        image.drawString(prefix + score, 60, 140);
        image.drawString("Try again?", 60, 210);
        image.drawString("click here", 50, 260);
        //image.scale(500, 500);
        setImage(image);
    }
    
     /**
     * Make the last total score board image.
     */
    private void makeImage(String title, int score, MyHero mh)
    {
        GreenfootImage image = new GreenfootImage(WIDTH, HEIGHT);

        image.setColor(new Color(255,255,255, 128));
        image.fillRect(10, 0, WIDTH, HEIGHT);
        image.setColor(new Color(0, 0, 0, 128));
        image.fillRect(5, 5, WIDTH-10, HEIGHT-10);
        Font font = image.getFont();
        font = font.deriveFont(30.0f);
        image.setFont(font);
        image.setColor(Color.WHITE);
        image.drawString(title, 60, 40);
        image.drawString("  Final score: "+score, 40, 100);
        image.drawString("  Total time: "+ mh.getCurrentTime().getTime(), 40, 140);
        image.drawString("   Try again?", 60, 200);
        image.drawString("click here", 50, 250);
        image.scale(600, 600);
        setImage(image);
    }
    /**
     * homescreen image with the rules
     */
    private void makeImage(String title)
    {
        GreenfootImage image = new GreenfootImage(500, 400);
        
        image.setColor(new Color(255,255,255, 128));
        image.fillRect(0, 0, WIDTH, HEIGHT);
        image.setColor(new Color(0, 0, 0, 128));
        image.fillRect(5, 5, WIDTH-10, HEIGHT-10);
        Font font = image.getFont();
        font = font.deriveFont(18.0f);
        image.setFont(font);
        image.setColor(Color.WHITE);
        
        image.drawString("Welcome to the aMAZEment world!!!", 40, 40);
        image.drawString("How to play:" , 150, 80);
        image.drawString("Reach and touch the golden gem by moving " , 20, 120);
        image.drawString(" your crystal ball through the arrows. " , 20, 150);
        image.drawString("Hurry up and be careful!! Do not touch any  " , 20, 180);
        image.drawString("maze wall or your crystal ball will explode!" , 20, 210);
        image.drawString("Ready to play? Click the button below. ", 20, 240);
        //image.drawString("     click to play", 20, 270);

        image.scale(1000, 800);
        setImage(image);
    }
    
    
     /**
     * level title image  
     */
    private void makeImage(String title, boolean ttl)
    {
        GreenfootImage image = new GreenfootImage(300, 60);
        
        image.setColor(new Color(255,255,255, 128));
        image.fillRect(0, 0, WIDTH, HEIGHT);
        image.setColor(new Color(0, 0, 0, 128));
        image.fillRect(5, 5, WIDTH-10, HEIGHT-10);
        Font font = image.getFont();
        font = font.deriveFont(28.0f);
        image.setFont(font);
        image.setColor(Color.WHITE);
        
        image.drawString(title, 23, 40);
        
        //image.scale(1000, 800);
        setImage(image);
    }
}


