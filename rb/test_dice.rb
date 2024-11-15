require 'test/unit'
require_relative './dice'

class DiceTest < Test::Unit::TestCase
  NUMBER_OF_FACES = 6

  def setup
    @dice = Dice.new(NUMBER_OF_FACES)
  end

  # --- Instantiation Tests ---
  def test_initialize_with_valid_number_of_faces
    assert_nothing_raised do
      Dice.new(NUMBER_OF_FACES)
    end
  end

  def test_initialize_with_zero_faces
    assert_raises(StandardError) do
      Dice.new(0)
    end
  end

  def test_initialize_with_negative_faces
    negative_random_number = rand(1..100)
    assert_raises(StandardError) do
      Dice.new(-negative_random_number)
    end
  end

  # --- Shuffle Tests ---
  def test_shuffle_returns_valid_face
    drawn_face = @dice.shuffle
    assert_includes(1..NUMBER_OF_FACES, drawn_face, "Expected drawn face to be between 1 and #{NUMBER_OF_FACES}, but got #{drawn_face}")
  end

  def test_shuffle_updates_last_drawn_face
    drawn_face = @dice.shuffle
    last_drawn_face = @dice.get_last_draw_face
    assert_equal(drawn_face, last_drawn_face, "Expected last drawn face to be #{drawn_face}, but got #{last_drawn_face}")
  end

  # --- Get Last Drawn Face Tests ---
  def test_get_last_draw_face_raises_error_before_shuffle
    assert_raises(StandardError) do
      @dice.get_last_draw_face
    end
  end

  def test_get_last_draw_face_returns_correct_face_after_shuffle
    @dice.shuffle
    last_drawn_face = @dice.get_last_draw_face
    assert_includes(1..NUMBER_OF_FACES, last_drawn_face, "Expected last drawn face to be between 1 and #{NUMBER_OF_FACES}, but got #{last_drawn_face}")
  end

  # --- Private Field Access ---
  def test_private_faces_array
    faces = @dice.send(:instance_variable_get, :@faces)
    assert_equal([1, 2, 3, 4, 5, 6], faces, 'The faces array should be correctly initialized')
  end

  def test_private_last_draw_face
    last_drawn_face = @dice.send(:instance_variable_get, :@last_drawn_face)
    assert_nil(last_drawn_face, 'The last_drawn_face should be nil initially')
  end
end
