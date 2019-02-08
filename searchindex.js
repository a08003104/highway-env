Search.setIndex({docnames:["highway_env","highway_env.envs","highway_env.envs.abstract","highway_env.envs.finite_mdp","highway_env.envs.graphics","highway_env.envs.highway_env","highway_env.envs.merge_env","highway_env.envs.parking_env","highway_env.envs.roundabout_env","highway_env.logger","highway_env.road","highway_env.road.graphics","highway_env.road.lane","highway_env.road.road","highway_env.utils","highway_env.vehicle","highway_env.vehicle.behavior","highway_env.vehicle.control","highway_env.vehicle.dynamics","highway_env.vehicle.graphics","highway_env.vehicle.uncertainty","index","modules"],envversion:53,filenames:["highway_env.rst","highway_env.envs.rst","highway_env.envs.abstract.rst","highway_env.envs.finite_mdp.rst","highway_env.envs.graphics.rst","highway_env.envs.highway_env.rst","highway_env.envs.merge_env.rst","highway_env.envs.parking_env.rst","highway_env.envs.roundabout_env.rst","highway_env.logger.rst","highway_env.road.rst","highway_env.road.graphics.rst","highway_env.road.lane.rst","highway_env.road.road.rst","highway_env.utils.rst","highway_env.vehicle.rst","highway_env.vehicle.behavior.rst","highway_env.vehicle.control.rst","highway_env.vehicle.dynamics.rst","highway_env.vehicle.graphics.rst","highway_env.vehicle.uncertainty.rst","index.rst","modules.rst"],objects:{"":{highway_env:[21,0,0,"-"]},"highway_env.envs":{"abstract":[2,0,0,"-"],finite_mdp:[3,0,0,"-"],graphics:[4,0,0,"-"],highway_env:[5,0,0,"-"],merge_env:[6,0,0,"-"],parking_env:[7,0,0,"-"],roundabout_env:[8,0,0,"-"]},"highway_env.envs.abstract":{AbstractEnv:[2,1,1,""]},"highway_env.envs.abstract.AbstractEnv":{ACTIONS:[2,2,1,""],ACTIONS_INDEXES:[2,2,1,""],OBSERVATION_FEATURES:[2,2,1,""],OBSERVATION_VEHICLES:[2,2,1,""],PERCEPTION_DISTANCE:[2,2,1,""],POLICY_FREQUENCY:[2,2,1,""],SIMULATION_FREQUENCY:[2,2,1,""],__deepcopy__:[2,3,1,""],__init__:[2,3,1,""],__module__:[2,2,1,""],_automatic_rendering:[2,3,1,""],_constraint:[2,3,1,""],_is_terminal:[2,3,1,""],_observation:[2,3,1,""],_reward:[2,3,1,""],_simulate:[2,3,1,""],change_vehicles:[2,3,1,""],close:[2,3,1,""],get_available_actions:[2,3,1,""],metadata:[2,2,1,""],randomize_behaviour:[2,3,1,""],render:[2,3,1,""],reset:[2,3,1,""],seed:[2,3,1,""],set_preferred_lane:[2,3,1,""],set_route_at_intersection:[2,3,1,""],simplify:[2,3,1,""],step:[2,3,1,""],to_finite_mdp:[2,3,1,""]},"highway_env.envs.finite_mdp":{clip_position:[3,4,1,""],compute_ttc_grid:[3,4,1,""],finite_mdp:[3,4,1,""],transition_model:[3,4,1,""]},"highway_env.envs.graphics":{EnvViewer:[4,1,1,""]},"highway_env.envs.graphics.EnvViewer":{SAVE_IMAGES:[4,2,1,""],SCREEN_HEIGHT:[4,2,1,""],SCREEN_WIDTH:[4,2,1,""],__dict__:[4,2,1,""],__init__:[4,3,1,""],__module__:[4,2,1,""],__weakref__:[4,2,1,""],close:[4,3,1,""],display:[4,3,1,""],get_image:[4,3,1,""],handle_events:[4,3,1,""],set_agent_action_sequence:[4,3,1,""],set_agent_display:[4,3,1,""],window_position:[4,3,1,""]},"highway_env.envs.highway_env":{HighwayEnv:[5,1,1,""]},"highway_env.envs.highway_env.HighwayEnv":{COLLISION_REWARD:[5,2,1,""],DIFFICULTY_LEVELS:[5,2,1,""],HIGH_VELOCITY_REWARD:[5,2,1,""],LANE_CHANGE_REWARD:[5,2,1,""],RIGHT_LANE_REWARD:[5,2,1,""],__init__:[5,3,1,""],__module__:[5,2,1,""],_constraint:[5,3,1,""],_create_road:[5,3,1,""],_create_vehicles:[5,3,1,""],_is_terminal:[5,3,1,""],_observation:[5,3,1,""],_reward:[5,3,1,""],configure:[5,3,1,""],reset:[5,3,1,""],set_difficulty_level:[5,3,1,""],step:[5,3,1,""]},"highway_env.envs.merge_env":{MergeEnv:[6,1,1,""]},"highway_env.envs.merge_env.MergeEnv":{COLLISION_REWARD:[6,2,1,""],DEFAULT_CONFIG:[6,2,1,""],HIGH_VELOCITY_REWARD:[6,2,1,""],LANE_CHANGE_REWARD:[6,2,1,""],MERGING_VELOCITY_REWARD:[6,2,1,""],RIGHT_LANE_REWARD:[6,2,1,""],__init__:[6,3,1,""],__module__:[6,2,1,""],_is_terminal:[6,3,1,""],_make_road:[6,3,1,""],_make_vehicles:[6,3,1,""],_observation:[6,3,1,""],_reward:[6,3,1,""],configure:[6,3,1,""],reset:[6,3,1,""]},"highway_env.envs.parking_env":{ParkingEnv:[7,1,1,""]},"highway_env.envs.parking_env.ParkingEnv":{ACCELERATION_RANGE:[7,2,1,""],DEFAULT_CONFIG:[7,2,1,""],NORMALIZE_OBS:[7,2,1,""],OBSERVATION_FEATURES:[7,2,1,""],OBSERVATION_VEHICLES:[7,2,1,""],OBS_SCALE:[7,2,1,""],REWARD_WEIGHTS:[7,2,1,""],STEERING_RANGE:[7,2,1,""],SUCCESS_GOAL_REWARD:[7,2,1,""],__init__:[7,3,1,""],__module__:[7,2,1,""],_create_road:[7,3,1,""],_create_vehicles:[7,3,1,""],_is_success:[7,3,1,""],_is_terminal:[7,3,1,""],_observation:[7,3,1,""],_reward:[7,3,1,""],compute_reward:[7,3,1,""],configure:[7,3,1,""],reset:[7,3,1,""],step:[7,3,1,""]},"highway_env.envs.roundabout_env":{RoundaboutEnv:[8,1,1,""],rad:[8,4,1,""]},"highway_env.envs.roundabout_env.RoundaboutEnv":{COLLISION_REWARD:[8,2,1,""],DEFAULT_CONFIG:[8,2,1,""],DURATION:[8,2,1,""],HIGH_VELOCITY_REWARD:[8,2,1,""],LANE_CHANGE_REWARD:[8,2,1,""],RIGHT_LANE_REWARD:[8,2,1,""],__init__:[8,3,1,""],__module__:[8,2,1,""],_is_terminal:[8,3,1,""],_make_road:[8,3,1,""],_make_vehicles:[8,3,1,""],_observation:[8,3,1,""],_reward:[8,3,1,""],configure:[8,3,1,""],reset:[8,3,1,""],step:[8,3,1,""]},"highway_env.logger":{Loggable:[9,1,1,""],test:[9,4,1,""]},"highway_env.logger.Loggable":{__dict__:[9,2,1,""],__module__:[9,2,1,""],__weakref__:[9,2,1,""],dump:[9,3,1,""],get_log:[9,3,1,""]},"highway_env.road":{graphics:[11,0,0,"-"],lane:[12,0,0,"-"],road:[13,0,0,"-"]},"highway_env.road.graphics":{LaneGraphics:[11,1,1,""],RoadGraphics:[11,1,1,""],WorldSurface:[11,1,1,""]},"highway_env.road.graphics.LaneGraphics":{STRIPE_LENGTH:[11,2,1,""],STRIPE_SPACING:[11,2,1,""],STRIPE_WIDTH:[11,2,1,""],__dict__:[11,2,1,""],__module__:[11,2,1,""],__weakref__:[11,2,1,""],continuous_curve:[11,5,1,""],continuous_line:[11,5,1,""],display:[11,5,1,""],draw_stripes:[11,5,1,""],striped_line:[11,5,1,""]},"highway_env.road.graphics.RoadGraphics":{__dict__:[11,2,1,""],__module__:[11,2,1,""],__weakref__:[11,2,1,""],display:[11,5,1,""],display_traffic:[11,5,1,""]},"highway_env.road.graphics.WorldSurface":{BLACK:[11,2,1,""],GREEN:[11,2,1,""],GREY:[11,2,1,""],INITIAL_CENTERING:[11,2,1,""],INITIAL_SCALING:[11,2,1,""],MOVING_FACTOR:[11,2,1,""],SCALING_FACTOR:[11,2,1,""],WHITE:[11,2,1,""],YELLOW:[11,2,1,""],__dict__:[11,2,1,""],__init__:[11,3,1,""],__module__:[11,2,1,""],handle_event:[11,3,1,""],move_display_window_to:[11,3,1,""],pix:[11,3,1,""],pos2pix:[11,3,1,""],vec2pix:[11,3,1,""]},"highway_env.road.lane":{AbstractLane:[12,1,1,""],CircularLane:[12,1,1,""],LineType:[12,1,1,""],SineLane:[12,1,1,""],StraightLane:[12,1,1,""]},"highway_env.road.lane.AbstractLane":{DEFAULT_WIDTH:[12,2,1,""],__dict__:[12,2,1,""],__module__:[12,2,1,""],__weakref__:[12,2,1,""],after_end:[12,3,1,""],distance:[12,3,1,""],heading_at:[12,3,1,""],is_reachable_from:[12,3,1,""],local_coordinates:[12,3,1,""],metaclass__:[12,2,1,""],on_lane:[12,3,1,""],position:[12,3,1,""],width_at:[12,3,1,""]},"highway_env.road.lane.CircularLane":{__init__:[12,3,1,""],__module__:[12,2,1,""],heading_at:[12,3,1,""],local_coordinates:[12,3,1,""],position:[12,3,1,""],width_at:[12,3,1,""]},"highway_env.road.lane.LineType":{CONTINUOUS:[12,2,1,""],CONTINUOUS_LINE:[12,2,1,""],NONE:[12,2,1,""],STRIPED:[12,2,1,""],__dict__:[12,2,1,""],__module__:[12,2,1,""],__weakref__:[12,2,1,""]},"highway_env.road.lane.SineLane":{__init__:[12,3,1,""],__module__:[12,2,1,""],heading_at:[12,3,1,""],local_coordinates:[12,3,1,""],position:[12,3,1,""]},"highway_env.road.lane.StraightLane":{__init__:[12,3,1,""],__module__:[12,2,1,""],heading_at:[12,3,1,""],local_coordinates:[12,3,1,""],position:[12,3,1,""],width_at:[12,3,1,""]},"highway_env.road.road":{Road:[13,1,1,""],RoadNetwork:[13,1,1,""]},"highway_env.road.road.Road":{__init__:[13,3,1,""],__module__:[13,2,1,""],__repr__:[13,3,1,""],act:[13,3,1,""],close_vehicles_to:[13,3,1,""],closest_vehicles_to:[13,3,1,""],dump:[13,3,1,""],get_log:[13,3,1,""],neighbour_vehicles:[13,3,1,""],step:[13,3,1,""]},"highway_env.road.road.RoadNetwork":{__dict__:[13,2,1,""],__init__:[13,3,1,""],__module__:[13,2,1,""],__weakref__:[13,2,1,""],add_lane:[13,3,1,""],add_node:[13,3,1,""],all_side_lanes:[13,3,1,""],bfs_paths:[13,3,1,""],get_closest_lane_index:[13,3,1,""],get_lane:[13,3,1,""],is_connected_road:[13,3,1,""],is_leading_to_road:[13,6,1,""],is_same_road:[13,6,1,""],lanes_list:[13,3,1,""],next_lane:[13,3,1,""],shortest_path:[13,3,1,""],side_lanes:[13,3,1,""],straight_road_network:[13,6,1,""]},"highway_env.utils":{class_from_path:[14,4,1,""],constrain:[14,4,1,""],do_every:[14,4,1,""],has_corner_inside:[14,4,1,""],not_zero:[14,4,1,""],point_in_ellipse:[14,4,1,""],point_in_rectangle:[14,4,1,""],point_in_rotated_rectangle:[14,4,1,""],remap:[14,4,1,""],rotated_rectangles_intersect:[14,4,1,""],wrap_to_pi:[14,4,1,""]},"highway_env.vehicle":{behavior:[16,0,0,"-"],control:[17,0,0,"-"],dynamics:[18,0,0,"-"],graphics:[19,0,0,"-"],uncertainty:[20,0,0,"-"]},"highway_env.vehicle.behavior":{AggressiveVehicle:[16,1,1,""],DefensiveVehicle:[16,1,1,""],IDMVehicle:[16,1,1,""],LinearVehicle:[16,1,1,""]},"highway_env.vehicle.behavior.AggressiveVehicle":{ACCELERATION_PARAMETERS:[16,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[16,2,1,""],MERGE_ACC_GAIN:[16,2,1,""],MERGE_TARGET_VEL:[16,2,1,""],MERGE_VEL_RATIO:[16,2,1,""],__module__:[16,2,1,""]},"highway_env.vehicle.behavior.DefensiveVehicle":{ACCELERATION_PARAMETERS:[16,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[16,2,1,""],MERGE_ACC_GAIN:[16,2,1,""],MERGE_TARGET_VEL:[16,2,1,""],MERGE_VEL_RATIO:[16,2,1,""],__module__:[16,2,1,""]},"highway_env.vehicle.behavior.IDMVehicle":{ACC_MAX:[16,2,1,""],COMFORT_ACC_MAX:[16,2,1,""],COMFORT_ACC_MIN:[16,2,1,""],DELTA:[16,2,1,""],DISTANCE_WANTED:[16,2,1,""],LANE_CHANGE_DELAY:[16,2,1,""],LANE_CHANGE_MAX_BRAKING_IMPOSED:[16,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[16,2,1,""],POLITENESS:[16,2,1,""],TIME_WANTED:[16,2,1,""],__init__:[16,3,1,""],__module__:[16,2,1,""],acceleration:[16,3,1,""],act:[16,3,1,""],change_lane_policy:[16,3,1,""],create_from:[16,5,1,""],desired_gap:[16,3,1,""],maximum_velocity:[16,3,1,""],mobil:[16,3,1,""],randomize_behavior:[16,3,1,""],recover_from_stop:[16,3,1,""],step:[16,3,1,""]},"highway_env.vehicle.behavior.LinearVehicle":{ACCELERATION_PARAMETERS:[16,2,1,""],ACCELERATION_RANGE:[16,2,1,""],STEERING_PARAMETERS:[16,2,1,""],STEERING_RANGE:[16,2,1,""],TIME_WANTED:[16,2,1,""],__init__:[16,3,1,""],__module__:[16,2,1,""],acceleration:[16,3,1,""],acceleration_features:[16,3,1,""],randomize_behavior:[16,3,1,""],steering_control:[16,3,1,""],steering_features:[16,3,1,""]},"highway_env.vehicle.control":{ControlledVehicle:[17,1,1,""],MDPVehicle:[17,1,1,""]},"highway_env.vehicle.control.ControlledVehicle":{DELTA_VELOCITY:[17,2,1,""],KP_A:[17,2,1,""],KP_HEADING:[17,2,1,""],KP_LATERAL:[17,2,1,""],MAX_STEERING_ANGLE:[17,2,1,""],PURSUIT_TAU:[17,2,1,""],TAU_A:[17,2,1,""],TAU_DS:[17,2,1,""],__init__:[17,3,1,""],__module__:[17,2,1,""],act:[17,3,1,""],create_from:[17,5,1,""],follow_road:[17,3,1,""],plan_route_to:[17,3,1,""],set_route_at_intersection:[17,3,1,""],steering_control:[17,3,1,""],velocity_control:[17,3,1,""]},"highway_env.vehicle.control.MDPVehicle":{SPEED_COUNT:[17,2,1,""],SPEED_MAX:[17,2,1,""],SPEED_MIN:[17,2,1,""],__init__:[17,3,1,""],__module__:[17,2,1,""],act:[17,3,1,""],index_to_speed:[17,5,1,""],predict_trajectory:[17,3,1,""],speed_index:[17,3,1,""],speed_to_index:[17,5,1,""]},"highway_env.vehicle.dynamics":{Obstacle:[18,1,1,""],Vehicle:[18,1,1,""]},"highway_env.vehicle.dynamics.Obstacle":{__init__:[18,3,1,""],__module__:[18,2,1,""]},"highway_env.vehicle.dynamics.Vehicle":{COLLISIONS_ENABLED:[18,2,1,""],DEFAULT_VELOCITIES:[18,2,1,""],LENGTH:[18,2,1,""],MAX_VELOCITY:[18,2,1,""],WIDTH:[18,2,1,""],__init__:[18,3,1,""],__module__:[18,2,1,""],__repr__:[18,3,1,""],__str__:[18,3,1,""],act:[18,3,1,""],check_collision:[18,3,1,""],create_from:[18,5,1,""],create_random:[18,5,1,""],direction:[18,2,1,""],dump:[18,3,1,""],get_log:[18,3,1,""],lane_distance_to:[18,3,1,""],make_on_lane:[18,5,1,""],step:[18,3,1,""],to_dict:[18,3,1,""]},"highway_env.vehicle.graphics":{VehicleGraphics:[19,1,1,""]},"highway_env.vehicle.graphics.VehicleGraphics":{BLACK:[19,2,1,""],BLUE:[19,2,1,""],DEFAULT_COLOR:[19,2,1,""],EGO_COLOR:[19,2,1,""],GREEN:[19,2,1,""],PURPLE:[19,2,1,""],RED:[19,2,1,""],YELLOW:[19,2,1,""],__dict__:[19,2,1,""],__module__:[19,2,1,""],__weakref__:[19,2,1,""],control_event:[19,5,1,""],display:[19,5,1,""],display_trajectory:[19,5,1,""],dynamics_event:[19,5,1,""],get_color:[19,5,1,""],handle_event:[19,5,1,""]},"highway_env.vehicle.uncertainty":{IntervalVehicle:[20,1,1,""],VehicleInterval:[20,1,1,""]},"highway_env.vehicle.uncertainty.IntervalVehicle":{__init__:[20,3,1,""],__module__:[20,2,1,""],check_collision:[20,3,1,""],create_from:[20,5,1,""],integrator_interval:[20,6,1,""],interval_negative_part:[20,6,1,""],intervals_diff:[20,6,1,""],intervals_product:[20,6,1,""],observer_step:[20,3,1,""],partial_step:[20,3,1,""],step:[20,3,1,""],store_trajectories:[20,3,1,""],vector_interval_section:[20,6,1,""]},"highway_env.vehicle.uncertainty.VehicleInterval":{__dict__:[20,2,1,""],__init__:[20,3,1,""],__module__:[20,2,1,""],__weakref__:[20,2,1,""]},highway_env:{envs:[1,0,0,"-"],logger:[9,0,0,"-"],road:[10,0,0,"-"],utils:[14,0,0,"-"],vehicle:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:classmethod","6":"py:staticmethod"},terms:{"1st":18,"abstract":[0,1,5,6,7,8],"case":[13,20],"class":[2,4,5,6,7,8,9,11,12,13,16,17,18,19,20],"default":[2,5,7,8,16,17,18,20],"final":3,"function":[2,4,9,11,12,13,20],"int":[2,5,7,8],"new":[2,5,7,12,13,16,17,18,20],"return":[2,3,4,5,6,7,8,9,11,12,13,16,17,18,20],"static":[13,20],"switch":17,"true":[2,12,16,18,20],"try":16,"while":[2,18],For:[3,16,20],The:[2,3,5,6,7,8,16,17,18,19,20],Use:7,Using:17,Will:2,__deepcopy__:2,__dict__:[4,9,11,12,13,19,20],__doc__:[4,9,11,12,13,19,20],__init__:[2,4,5,6,7,8,11,12,13,16,17,18,20],__module__:[2,4,5,6,7,8,9,11,12,13,16,17,18,19,20],__repr__:[13,18],__str__:18,__weakref__:[4,9,11,12,13,19,20],_automatic_rend:2,_constraint:[2,5],_create_road:[5,7],_create_vehicl:[5,7],_from:13,_is_success:7,_is_termin:[2,5,6,7,8],_make_road:[6,8],_make_vehicl:[6,8],_observ:[2,5,6,7,8],_reward:[2,5,6,7,8],_simul:2,_to:[2,13,17],a_max:20,a_min:20,abc:12,abcmeta:12,abil:3,about:16,abstractenv:[2,3,5,6,7,8],abstractlan:[12,13],acc_max:16,acceler:[7,16,17,18,20],acceleration_featur:16,acceleration_paramet:16,acceleration_rang:[7,16],access:[2,6,8,9],accident:2,accur:[2,4,5,6,7,8,11,12,13,16,17,18,20],achiev:7,achieved_go:7,act:[13,16,17,18],action:[2,3,4,5,6,7,8,13,16,17,18],action_dur:17,actions_index:2,actuat:19,add:[5,7],add_lan:13,add_nod:13,added:3,addit:[3,6],adjac:[5,7],after:[13,16],after_end:12,agent:[2,4,7],agent_displai:4,aggressivevehicl:16,alia:12,all:[2,3,5,7,8,13,16,20],all_side_lan:13,allow:[2,16,17],along:[11,13,18],alpha:20,also:[6,13],altern:2,altruist:6,among:17,amplitud:12,angl:[14,16,17],ani:[2,6,7,13,20],anoth:[3,13,18],approach:6,arc:12,area:11,aren:2,arrai:[4,16],associ:[2,7,8],assum:[16,20],attribut:[4,9,11,12,13,19,20],automat:[2,17],avail:[2,3,13],avoid:[5,6,16],axi:14,b_max:20,b_min:20,base:[2,4,5,6,7,8,9,11,12,13,16,17,18,19,20],becaus:16,been:[2,6,8],behavior:[0,2,5,6,8,15,20],behaviour:[2,4,5,7,8,13,20],behind:18,being:[16,18],belong:13,between:[2,11,16,17,18],bfs_path:13,bicycl:18,big:14,bigint:2,black:[11,19],blue:19,both:[12,16],bound:[3,20],boundari:[2,20],brake:[16,18],breadth:13,budget:2,callback:[2,4],can:[2,4,9,11,13,16],candid:16,captur:2,cascad:17,cast:[9,18],cell:3,center:[4,11,12,14,17],centering_posit:[5,6,7,8],central:12,chang:[2,3,5,12,16,17,20],change_lane_polici:16,change_vehicl:2,check:[2,14,18],check_collis:[18,20],choic:3,choos:17,chosen:[4,16,18],circl:12,circularlan:12,class_from_path:14,classmethod:[11,16,17,18,19,20],clip:3,clip_posit:3,clockwis:12,close:[2,4,16],close_vehicles_to:13,closest:[13,17],closest_vehicles_to:13,collect:16,collid:[3,5,20],collis:[3,5,6,8,13,16,18],collision_reward:[5,6,8],collisions_en:18,color:19,comfort_acc_max:16,comfort_acc_min:16,command:[16,17],compar:13,compat:3,complet:18,compos:[5,6,7],comput:[2,3,12,16,18,20],compute_reward:7,compute_ttc_grid:3,concaten:13,config:[5,6,7,8],configur:[2,5,6,7,8],connect:13,consid:13,considered_lan:3,consist:[2,5,6,7,8],constant:[2,3],constrain:14,constraint:[2,5],contain:[2,9,18],content:22,continu:[7,11,12],continuous_curv:11,continuous_lin:[11,12],control:[0,2,7,15,16,19],control_ev:19,controlledvehicl:[16,17],convert:[11,12,17],coordin:[3,11,12,13],copi:[2,16,17,18,20],core:[2,7],corner:14,correl:2,correspond:[2,5,7,11,12,13,17,20],cos_h:7,count:13,crash:[5,7,18],creat:[2,5,7,16,17,18,20],create_from:[16,17,18,20],create_random:18,credit:7,cruis:17,current:[2,5,6,7,8,13,17,18,20],current_index:13,curv:12,data:[9,13],datafram:[9,18],deceler:16,decid:[13,16],decis:[2,5,7,8,16,19,20],dedic:4,deep:2,default_color:19,default_config:[6,7,8],default_veloc:18,default_width:12,defensivevehicl:16,defin:[2,3,4,5,9,11,12,13,19,20],deg:8,delai:16,delta:16,delta_veloc:17,densiti:18,depend:[18,19],depth:13,describ:[12,13],desir:[7,16,17],desired_gap:16,desired_go:7,destin:[13,17],detect:18,determinist:3,differ:[3,20],difficulty_level:5,direct:[18,20],discret:17,displai:[4,11,19],display_traff:11,display_trajectori:19,distanc:[2,11,12,13,16,18],distance_w:16,distant:2,do_everi:14,doe:16,doesn:[2,13,16],draw:[11,19],draw_strip:11,drawn:[11,19],drive:[2,4,5,6,13,18],driver:16,dump:[9,13,18],durat:[3,5,8,14,17],dynam:[0,2,5,7,8,13,15,16,17,19,20],dynamics_ev:19,each:[3,5,11,13,17],easi:5,edg:13,ego:[2,3,5,6,7,8,16],ego_color:19,ego_vehicl:16,ellips:14,els:[13,17],enabl:18,enable_lane_chang:[16,20],encod:[3,13],end:[2,7,8,11,12,13,17],end_phas:12,enough:16,ensur:2,entiti:13,env:[0,22],environ:[2,3,4,5,6,7,8],envview:4,episod:[5,6,7,8],equal:2,eras:17,errat:18,even:[4,16],event:[4,11,19],everi:3,exampl:2,exclud:3,execut:[2,5,7,8,16],exist:[2,16,17,18,20],fals:[4,7,12,13,19],faster:2,featur:16,find:[13,17],finish:13,finite_mdp:[0,1],finitemdpenv:3,first:[2,11,13],fix:2,flag:11,flatten:3,follow:[4,13,16,17,20],follow_road:17,forbidden:12,forward:[4,17],foster:5,found:13,frame:2,free:2,frequenc:[2,16],from:[2,3,12,13,16,17,18,20],front:[16,18],front_vehicl:16,full:[5,16,20],futur:[17,19],gain:20,gener:[2,13],geometri:13,get:[2,12,13],get_available_act:2,get_closest_lane_index:13,get_color:19,get_imag:4,get_lan:13,get_log:[9,13,18],given:[2,3,5,7,8,11,12,13,16,17,18],goal:[7,13],goalenv:7,going:[12,16],graphic:[0,1,10,15],green:[11,19],grei:11,grid:3,gym:[2,7],handl:[4,11,19],handle_ev:[4,11,19],handler:17,hard:5,has:[2,3,6,8,13,14],has_corner_insid:14,have:[2,7,13,16],head:[12,16,17,18,20],heading_at:12,help:[2,4,5,6,7,8,11,12,13,16,17,18,20],high:[5,6,7,17],high_velocity_reward:[5,6,8],higher:16,highwai:[4,5,6,8],highwayenv:5,home:13,horizon:3,human:2,hypothesi:3,idea:7,idl:2,idm:16,idmvehicl:[2,5,6,8,16],imag:[2,4],implement:[2,7,9,11],impos:16,includ:3,incom:6,incoming_vehicle_destin:8,increas:[16,20],index:[2,3,13,16,17,18,21],index_to_spe:17,induc:16,inevit:16,info:[2,5,7,8],inform:7,initi:[2,4,5,6,7,8,11,12,13,16,17,18,20],initial_cent:11,initial_sc:11,initial_spac:5,input:[11,13,17,18],insid:14,instanc:3,integr:[18,20],integrator_interv:20,intellig:16,intermedi:2,intern:[9,18],intersect:[13,14,17],interv:20,interval_negative_part:20,intervals_diff:20,intervals_product:20,intervalvehicl:20,involv:2,is_connected_road:13,is_leading_to_road:13,is_reachable_from:12,is_same_road:13,iter:3,its:[3,12,13,16,17,18,20],jojo:7,keyboard:19,kinemat:18,known:12,kp_a:17,kp_head:17,kp_later:17,kurtosi:7,label:[2,13],lane:[0,2,3,5,6,7,8,10,11,13,16,17,18,20],lane_change_delai:16,lane_change_max_braking_impos:16,lane_change_min_acc_gain:16,lane_change_model:20,lane_change_reward:[5,6,8],lane_distance_to:18,lane_index:[13,16,18],lane_index_1:13,lane_index_2:13,lane_left:2,lane_right:2,lanegraph:11,lanes_count:5,lanes_list:13,last:[2,5,7,8,18],lat:11,later:[11,12,16,17],layer:3,lead:[13,16],left:[3,11,13],length:[11,13,14,18],level:[5,17],lib:13,limit:3,line:[11,12],line_typ:12,linear:16,linearli:5,linearvehicl:[16,20],linetyp:12,list:[2,4,9,11,12,13,19,20],load:2,local:[11,12,13],local_coordin:12,locat:[3,18],log:[9,13,18],loggabl:[9,13,18],logger:[0,13,18,22],longitudin:[11,12,16,17,18],look:13,low:[6,17],lower:[2,5,16,20],mai:16,main:[2,14],maintain:[3,6,16],make:[2,5,6,7,8],make_on_lan:18,maneuv:16,map:[2,5,19],mappingproxi:[4,9,11,12,13,19,20],match:13,max:20,max_steering_angl:17,max_vehicl:20,max_veloc:18,maxim:[2,16],maximum:[2,16,18],maximum_veloc:16,mdp:2,mdpvehicl:[17,20],meant:2,medium:5,membership:20,memo:2,merg:[6,8,20],merge_acc_gain:16,merge_env:[0,1],merge_target_vel:16,merge_vel_ratio:16,mergeenv:6,merging_velocity_reward:6,metaclass__:12,metadata:2,method:16,metric:[2,9,18],min:20,min_vehicl:20,minim:[2,16],minimum:16,mobil:16,mode:2,model:[2,16,18,20],model_vehicl:20,modifi:[2,18],modul:[21,22],monitor:2,more:16,most:5,motionless:18,move:[11,18],move_display_window_to:11,moving_factor:11,multipl:2,munir:7,must:[2,5,6,7,8,13,20],nearbi:16,need:2,neg:20,negoti:6,neighbour:[13,18],neighbour_vehicl:13,network:[13,17],next:[2,3,5,7,8,13,17],next_lan:13,node:[13,17],non:16,none:[2,8,12,13,16,17,18,19,20],norm:7,normalize_ob:7,not_zero:14,note:[2,20],notic:16,now:16,np_random:13,number:[2,11,13,18],numpi:13,object:[4,9,11,12,13,19,20],obs_scal:7,observ:[2,3,5,6,7,8,20],observation_featur:[2,7],observation_spac:[2,5,6,7,8],observation_vehicl:[2,7],observer_step:20,obstacl:18,occup:3,occur:[6,8],occurr:5,offset:11,often:2,on_lan:12,one:[11,16,17,18,20],ongo:2,onli:[2,16,18,20],optim:2,option:12,order:[2,18],origin:[11,13],origin_vehicl:18,oscil:12,other:[2,5,7,8,16,17,18,20],other_vehicles_typ:[5,6,8],out:5,outcom:20,over:[3,5,6,7,8],overal:16,overrid:16,overridden:18,own:16,packag:[13,22],panda:9,param:5,paramet:[2,3,4,5,6,7,8,11,12,13,14,16,17,18,19,20],parking_env:[0,1],parkingenv:7,part:20,partial_step:20,pass:[2,6,8],path:[2,13,14],penalti:[2,6],perception_dist:2,perform:[2,5,6,7,8,16,17],phase:12,pick:13,pilot:17,pix:11,pixel:11,plan:[13,17,20],plan_route_to:17,point:14,point_in_ellips:14,point_in_rectangl:14,point_in_rotated_rectangl:14,polici:[2,16,20],policy_frequ:2,polit:16,popul:[2,6,8],pos2pix:11,posit:[3,4,7,11,12,13,16,17,18,20],possibl:20,preced:[13,16],predict:[3,17],predict_trajectori:17,preferred_lan:2,presenc:2,present:2,preserv:2,probabl:3,product:20,project:13,propag:[18,20],proper:20,properti:[16,17,18,20],proport:17,provid:[2,4,17],proxim:7,pseudorandom:2,pulsat:12,purpl:19,pursuit_tau:17,pygam:[4,11,19],python3:13,quantiz:3,rad:[8,12,14,16,17],radiu:12,ramp:[6,8],random:[2,5,7,13,18],randomize_behavior:16,randomize_behaviour:2,randomli:[13,18],randomst:13,rang:[17,18],rate:17,ratio:[18,20],ravel:3,rbg:4,reach:[5,7,16],reachabl:[12,18],rear_vehicl:16,reason:16,receiv:[5,19],record:2,recov:16,recover_from_stop:16,rect1:14,rect2:14,rect_max:14,rect_min:14,rectangl:[14,19],red:19,refer:[4,9,11,12,13,17,19,20],rel:18,remap:14,remov:2,render:[2,4],repeat:18,repr:[13,18],repres:[13,18,19],represent:3,reproduc:2,reset:[2,5,6,7,8],resp:16,respect:16,respons:18,result:[3,20],revers:16,reward:[2,3,5,6,7,8],reward_weight:7,rgb_arrai:2,right:[5,6,11,13,20],right_lane_reward:[5,6,8],rightmost:5,road:[0,2,3,4,5,6,7,8,16,17,18,20,22],roadgraph:11,roadnetwork:13,robust:20,room:6,rotat:[14,19],rotated_rectangles_intersect:14,roundabout_env:[0,1],roundaboutenv:8,rout:[13,16,17,20],safeti:16,same:[13,16,17,18,20],same_lan:13,save:17,save_imag:4,scaling_factor:11,screen_height:4,screen_width:4,search:13,see:[2,4,5,6,7,8,11,12,13,16,17,18,20],seed:2,self:[2,4,5,6,7,8,11,12,13,16,17,18,20],sequenc:[4,17],set:[2,4,11,13,17,20],set_agent_action_sequ:4,set_agent_displai:4,set_difficulty_level:5,set_preferred_lan:2,set_route_at_intersect:[2,17],sever:[2,5,6,7,8],shortest:13,shortest_path:13,should:[2,13,16,19],side:[11,12],side_lan:13,sign:18,signal:[2,5],signatur:[2,4,5,6,7,8,11,12,13,16,17,18,20],simpl:17,simplifi:2,simul:[2,4,5,7,8,16,17,20],simulation_frequ:2,sin_h:7,sinelan:12,singl:2,sinusoid:12,site:13,size:11,slightli:19,slower:2,small:14,some:[2,5,6,7,18],sourc:13,space:[2,4,18],specif:4,specifi:[3,17,18],speed:[5,17],speed_count:17,speed_index:17,speed_max:17,speed_min:17,speed_to_index:17,split:20,spot:7,stai:[3,5,13],start:[11,12,13],start_phas:12,state:[2,3,5,6,7,8,16,17,18,19,20],staticmethod:13,steer:[7,16,17,18,20],steering_control:[16,17],steering_featur:16,steering_paramet:16,steering_rang:[7,16],step:[2,5,7,8,13,16,18,20],still:2,stop:[16,18],storag:20,store:[3,18,20],store_trajectori:20,str:18,straight:[5,6,7,12],straight_road_network:13,straightlan:12,stripe:[11,12],stripe_length:11,stripe_spac:11,stripe_width:11,striped_lin:11,stripes_count:11,stuck:16,submodul:22,subpackag:22,success_goal_reward:7,suffer:6,suggest:16,supplementari:7,support:16,surf:11,surfac:[4,11,19],symbol:13,system:[2,11,18,20],take:[2,16],target:[13,16,17,20],target_lane_index:[16,17,20],target_veloc:[16,17,20],task:[2,7],tau_a:17,tau_d:17,termin:[2,5,7,8],test:9,than:16,thei:[4,16],them:[4,5,7],theta_a_i:20,theta_b_i:20,thi:[2,3,12,16],though:16,three:3,through:9,time:[3,5,9,16],time_quant:3,time_w:16,timer:[14,16,20],timestep:[2,5,7,8,13,16,17,18,20],to_dict:18,to_finite_mdp:2,togeth:20,trajectori:[17,19,20],trajectory_timestep:17,transit:[3,6],transition_model:3,transpar:19,travi:13,ttc:3,tupl:[2,5,7,8,13],two:[11,14,16,17,20],type:[2,4,5,6,7,8,11,12,13,16,17,18,19,20],uncertainti:[0,15],under:[3,20],unsaf:16,until:[2,5,7,8,18],updat:[9,17,18],upper:20,use:[2,7],used:[2,3,7,16,20],useful:2,using:16,util:[0,22],valu:2,variou:2,vec2pix:11,vec:11,vector_interval_sect:20,vehicl:[0,2,3,4,5,6,7,8,11,13,22],vehicle_class_path:2,vehiclegraph:19,vehicleinterv:20,vehicles_count:5,veloc:[2,3,5,6,7,16,17,18,20],velocity_control:17,verg:7,video:2,viewer:[2,4],virtualenv:13,visual:11,want:2,weak:[4,9,11,12,13,19,20],weight:7,well:[6,8],wheel:[16,17,18],when:[5,6,8,13,16],where:[2,7,18],whether:[2,12,13,16,19],which:[2,3,5,6,7,8,11,13,16,20],white:11,whole:[2,19],whose:[9,13,16],why:16,width:[11,12,14,18],width_at:12,window:4,window_posit:4,within:[3,13,19],without:2,won:2,world:[4,11,12,13],worldsurfac:11,worst:20,would:11,wrap_to_pi:14,wrapper:2,wrong:16,x_i:20,x_i_:20,x_max:14,x_min:14,y_max:14,y_min:14,yellow:[11,19],yield:17,zero:5,zoom:11},titles:["highway_env package","highway_env.envs package","highway_env.envs.abstract module","highway_env.envs.finite_mdp module","highway_env.envs.graphics module","highway_env.envs.highway_env module","highway_env.envs.merge_env module","highway_env.envs.parking_env module","highway_env.envs.roundabout_env module","highway_env.logger module","highway_env.road package","highway_env.road.graphics module","highway_env.road.lane module","highway_env.road.road module","highway_env.utils module","highway_env.vehicle package","highway_env.vehicle.behavior module","highway_env.vehicle.control module","highway_env.vehicle.dynamics module","highway_env.vehicle.graphics module","highway_env.vehicle.uncertainty module","Welcome to highway-env\u2019s documentation!","highway_env"],titleterms:{"abstract":2,behavior:16,content:[0,1,10,15],control:17,document:21,dynam:18,env:[1,2,3,4,5,6,7,8,21],finite_mdp:3,graphic:[4,11,19],highwai:21,highway_env:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22],lane:12,logger:9,merge_env:6,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],packag:[0,1,10,15],parking_env:7,road:[10,11,12,13],roundabout_env:8,submodul:[0,1,10,15],subpackag:0,uncertainti:20,util:14,vehicl:[15,16,17,18,19,20],welcom:21}})