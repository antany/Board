package ca.antany.board.z.po;

public class Input<T> {
	
	public Input() {
		
	}

	public Input(T value) {
		super();
		this.value = value;
	}
	
	

	private T value;


	public T getValue() {
		return value;
	}

	public void setValue(T value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Input [value=" + value + "]";
	}
	
	

}
