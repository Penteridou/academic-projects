import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * A background with a path drawn on it. Two different backgrounds are available.
 * 
 * @author Michael Kölling
 * @version 1.0
 */
public class MyWorld0  extends World
{
    
    
    /**
     * Create the field.
     */
    public MyWorld0()
    {    
        // Create a new world with 20x20 cells with a cell size of 10x10 pixels.
        
        super(1000, 1140, 1);
        prepare();
        
    }

      

    /**
     * Prepare the world for the start of the program.
     * That is: create the initial objects and add them to the world.
     */
    private void prepare()
    {

        addObject(new ScoreBoard(" "), 600, 600);
         // Creating & adding play button to world
        Button button = new Button ();
        addObject (button, 500, 720);
    }
    
   
    
}
