class Dice
  def initialize(number_of_faces)
    unless number_of_faces.is_a?(Integer) && number_of_faces > 0
      raise StandardError.new "Error: Please, instantiate the Dice class with a number of Dice faces greater than zero"
    end

    @faces = []
    @last_drawn_face = nil
    number_of_faces.times {
      |i| @faces[i] = i + 1
    }
  end

  def shuffle()
    unless @faces.length > 0
      raise StandardError.new "Error: Cannot shuffle a Dice without faces"
    end
    shuffled_faces = @faces.shuffle()
    return @last_drawn_face = shuffled_faces[0]
  end

  def get_last_draw_face()
    unless @last_drawn_face
      raise StandardError.new "Error: No lastDrawnFace attribute of Dice"
    end
    return @last_drawn_face
  end
end 
