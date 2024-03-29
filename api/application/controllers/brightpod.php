<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Brightpod extends CI_Controller {

	public function getClientDetails() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('client.list');
		$fb->post(array(    
		    'email' => 'abc@gmail.com'
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}

	}
	
	public function projectList() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('project.list');
		$fb->post(array(    
		    'page' => 1,
		    'per_page' => 15
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}

	}

	public function newProject() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('project.create');
		$fb->post(array(
		    'project' => array(
		        'client_id' => $this->input->post('client_id'),
		        'name' => $this->input->post('project_name'),
		        'rate' => $this->input->post('rate'),
		        'bill_method' => $this->input->post('bill_method'),
		        'tasks' => array(
		        	'task'=> array(
		        		'task_id' => $this->input->post('task_id')
		        		)
		        	)
		    )
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}

	}

	public function getProjecById() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('project.get');
		$fb->post(array(    
		    'project_id' => $this->input->post('project_id')
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}
	}

	public function taskList() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('task.list');
		$fb->post(array(    
		    'page' => 1,
		    'per_page' => 15
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}

	}

	public function newTask() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('task.create');
		$fb->post(array(    
			'task' => array(
			    'name' => $this->input->post('name'),
			    'rate' => $this->input->post('rate'),
			    'description' => $this->input->post('description')
				)
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}
	}

	public function getTaskById() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('task.get');
		$fb->post(array(    
		    'task_id' => $this->input->post('task_id')
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}		
	}

	public function timeList() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('time_entry.list');
		$fb->post(array(    
		    'page' => 1,
		    'per_page' => 15
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}

	}

	public function newTimeEntry() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('time_entry.create');
		$fb->post(array(    
			'time_entry' => array(
			    'project_id' => $this->input->post('project_id'),
			    'task_id' => $this->input->post('task_id'),
			    'hours' => $this->input->post('hours'),
			    'date' => $this->input->post('date'),
			    'notes' => $this->input->post('notes')
				)
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}
	}

	public function getTimeById() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('time_entry.get');
		$fb->post(array(    
		    'time_entry_id' => $this->input->post('time_entry_id')
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}		
	}

	public function deleteProject() {
		FreshBooksRequest::init($this->config->item('domain'), $this->config->item('token'));
		$fb = new FreshBooksRequest('project.delete');
		$fb->post(array(   
		    'project_id' => $this->input->post('project_id')
		));
		$fb->request();
		if($fb->success()) {
		    echo json_encode($fb->getResponse()); 
		}
		else {
			echo json_encode($fb->getError());
		}		
	}
	
}